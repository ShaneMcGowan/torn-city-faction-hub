import { useQuery } from "@tanstack/react-query"
import { FactionMemberApi, FactionMemberResponse } from "./api";

const QUERY_KEY: string = 'faction/members';

interface GetFactionMembersParams {
  apiKey: string;
}

export const useGetFactionMembers = ({
  apiKey
}: GetFactionMembersParams) => useQuery<FactionMemberResponse>({
  queryKey: [QUERY_KEY],
  queryFn: async () => {
    const response = await FactionMemberApi.get(apiKey)

    if (response.error !== undefined) {
      throw new Error(response.error.error);
    }

    return response;
  }
});
