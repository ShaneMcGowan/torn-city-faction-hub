import { useQuery } from "@tanstack/react-query"
import { FactionAttacksFullApi, FactionAttacksFullResponse } from "./api";

const QUERY_KEY: string = 'faction/members';

interface GetFactionAttacksFullParams {
  apiKey: string;
}

export const useGetFactionAttacksFull = ({
  apiKey
}: GetFactionAttacksFullParams) => useQuery<FactionAttacksFullResponse>({
  queryKey: [QUERY_KEY],
  queryFn: async () => {
    const response = await FactionAttacksFullApi.get(apiKey)

    if (response.error !== undefined) {
      throw new Error(response.error.error);
    }

    return response;
  }
});
