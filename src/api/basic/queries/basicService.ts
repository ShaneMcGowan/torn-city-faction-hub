import { BasicResponse } from "../../../model/basic.model";
import { get } from "../../api"

const BasicService = {
  getBasic: async (user: string) => {
    const response = await get<BasicResponse>("faction/basic", user);
    return response;
  }
}

export {
  BasicService
}