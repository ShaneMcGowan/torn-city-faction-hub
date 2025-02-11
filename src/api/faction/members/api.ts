import { FactionMember } from "../../../model/faction/faction-member.model";
import { get } from "../../api";

type ErrorResponse = {
  error?: {
    code: number;
    error: string;
  };
}

export type BaseResponse = ErrorResponse;

export type FactionMemberResponse = BaseResponse & {
  members: FactionMember[];
}

const FactionMemberApi = {
  get: async (apiKey: string) => {
    const response = await get<FactionMemberResponse>("faction/members", apiKey);
    return response;
  }
}

export {
  FactionMemberApi
}