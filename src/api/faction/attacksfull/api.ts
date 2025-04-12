import { AttackSimplified } from "../../../model/attack-simplified.model";
import { BaseResponse, get } from "../../api";

export type FactionAttacksFullResponse = BaseResponse & {
  attacks: AttackSimplified[];
}

const FactionAttacksFullApi = {
  get: async (apiKey: string) => {
    const response = await get<FactionAttacksFullResponse>("faction/attacksfull", apiKey);
    return response;
  }
}

export {
  FactionAttacksFullApi
}