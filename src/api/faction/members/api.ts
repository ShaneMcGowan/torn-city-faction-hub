import { FactionMember } from "../../../model/faction/faction-member.model";
import { BaseResponse, get } from "../../api";

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