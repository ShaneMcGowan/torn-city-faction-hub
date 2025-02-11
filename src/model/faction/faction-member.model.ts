export type FactionMember = {
  id: UserId;
  name: string;
  position: string;
  level: number;
  days_in_faction: number;
  is_revivable: boolean;
  is_on_wall: boolean;
  is_in_oc: boolean;
  has_early_discharge: boolean;
  last_action: UserLastAction;
  status: UserStatus;
  life: UserLife;
  revive_setting: ReviveSetting;
}

export type UserId = number;

type UserLastAction = {
  status: string;
  timestamp: number;
  relative: string;
}

type UserStatus = {
  description: string;
  details: string | null;
  state: string;
  until: number | null;
}

type UserLife = {
  current: number
  maximum: number
}

enum ReviveSetting {
  Everyone = 'Everyone', 
  FriendsAndFaction = 'Friends & faction', 
  NoOne = 'No one', 
  Unknown = 'Unknown',
}