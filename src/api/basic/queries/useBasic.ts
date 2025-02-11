import { useQuery } from "@tanstack/react-query"
import { BasicService } from "../basicService";
import { BasicResponse } from "../../../model/basic.model";

const QUERY_KEY: string = 'faction/basic';

interface GetBasicParams {
  apiKey: string;
}

export const useGetBasic = ({
  apiKey
}: GetBasicParams) => useQuery<BasicResponse>({
  queryKey: [QUERY_KEY],
  queryFn: async () => {
    const response = await BasicService.getBasic(apiKey);

    if (response.error !== undefined) {
      throw new Error(response.error.error);
    }

    return response;
  }
});
