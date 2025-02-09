import { useQuery } from "@tanstack/react-query"
import { BasicService } from "./basicService";
import { BasicResponse } from "../../../model/basic.model";

const QUERY_KEY: string = 'basic';

interface GetBasicParams {
  user: string;
}

export const useGetBasic = ({
  user
}: GetBasicParams) => useQuery<BasicResponse>({
  queryKey: [QUERY_KEY],
  queryFn: async () => {
    const response = await BasicService.getBasic(user);

    if (response.error !== undefined) {
      throw new Error(response.error.error);
    }

    return response;
  }
});
