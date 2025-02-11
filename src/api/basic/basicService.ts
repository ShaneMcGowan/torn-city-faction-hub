import { BasicResponse } from "../../model/basic.model";
import { get } from "../api"

const BasicService = {
  getBasic: async (apiKey: string) => {
    const response = await get<BasicResponse>("faction/basic", apiKey);
    return response;
  }
}

export {
  BasicService
}