export interface BasicResponse {
  error?: {
    code: number;
    error: string;
  };
  basic: {
    id: number;
    name: string;
    tag: string;
    tag_image: string;
    leader_id: number;
    "co-leader_id": number;
    respect: number;
    days_old: number;
    capacity: number;
    members: number;
    is_enlisted: boolean;
    rank: {
      level: number;
      name: string;
      division: number;
      position: number;
      wins: number;
    },
    best_chain: number;
  }
}