type UserId = number;
type AttackId = number;
type AttackCode = string;


export type AttackSimplified = {
  id: AttackId;
  code: AttackCode;
  started: number; // Attack start timestamp.
  ended: number; // Attack end timestamp.
  attacker: {
    id: UserId;
    faction_id: number | null;
  } | null;
  defender: AttackPlayerSimplified;
  result: FactionAttackResult;
  respect_gain: number;
  respect_loss: number;
}

export type AttackPlayerSimplified = {
  id: UserId;
  faction_id: number | null;
}

export enum FactionAttackResult {
  None = 'None', 
  Attacked = 'Attacked', 
  Mugged = 'Mugged', 
  Hospitalized = 'Hospitalized', 
  Arrested = 'Arrested', 
  Looted = 'Looted', 
  Lost = 'Lost', 
  Stalemate = 'Stalemate', 
  Assist = 'Assist', 
  Escape = 'Escape', 
  Timeout = 'Timeout', 
  Special = 'Special', 
  Bounty = 'Bounty', 
  Interrupted = 'Interrupted'
}