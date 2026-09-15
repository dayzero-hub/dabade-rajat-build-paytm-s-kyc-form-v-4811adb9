// Dream11 team builder — the player pool your brief names, for a fictional fixture.
//
// The limits below are the rules of the contest: they are inputs, so that you are enforcing a
// known rule rather than inventing one. Enforcing them together — budget, roles and per-team
// cap at once — is the work, and it is what your brief is evaluated on.

export type PlayerRole = 'WK' | 'BAT' | 'AR' | 'BOWL'

export interface Player {
  id: string
  name: string
  /** One of the two sides in this fixture. */
  team: 'Deccan Chargers' | 'Konkan Kings'
  role: PlayerRole
  /** Credits, not rupees. The XI must fit inside CREDIT_BUDGET. */
  cost: number
}

/** Exactly this many players make a legal team. */
export const SQUAD_SIZE = 11
/** Total credits available for the whole XI. */
export const CREDIT_BUDGET = 100
/** The most players one real team may contribute. */
export const MAX_PER_TEAM = 7
/** Minimum and maximum for each role in a legal XI. */
export const ROLE_LIMITS: Record<PlayerRole, { min: number; max: number }> = {
  WK:   { min: 1, max: 4 },
  BAT:  { min: 3, max: 6 },
  AR:   { min: 1, max: 4 },
  BOWL: { min: 3, max: 6 },
}
/** Shown beside the captain and vice-captain choice. */
export const CAPTAIN_MULTIPLIER = 2
export const VICE_CAPTAIN_MULTIPLIER = 1.5

export const players: Player[] = [
  { id: 'dc-01', name: 'Rohan Adhikari',  team: 'Deccan Chargers', role: 'WK',   cost: 9.5 },
  { id: 'dc-02', name: 'Imran Qureshi',   team: 'Deccan Chargers', role: 'BAT',  cost: 10.5 },
  { id: 'dc-03', name: 'Kartik Menon',    team: 'Deccan Chargers', role: 'BAT',  cost: 9.0 },
  { id: 'dc-04', name: 'Suraj Bhandari',  team: 'Deccan Chargers', role: 'BAT',  cost: 8.0 },
  { id: 'dc-05', name: 'Aniket Rane',     team: 'Deccan Chargers', role: 'AR',   cost: 10.0 },
  { id: 'dc-06', name: 'Faisal Ahmed',    team: 'Deccan Chargers', role: 'AR',   cost: 8.5 },
  { id: 'dc-07', name: 'Pranav Iyer',     team: 'Deccan Chargers', role: 'BOWL', cost: 9.0 },
  { id: 'dc-08', name: 'Tejas Kulkarni',  team: 'Deccan Chargers', role: 'BOWL', cost: 8.5 },
  { id: 'dc-09', name: 'Harjot Sandhu',   team: 'Deccan Chargers', role: 'BOWL', cost: 7.5 },
  { id: 'dc-10', name: 'Vivek Nambiar',   team: 'Deccan Chargers', role: 'WK',   cost: 7.0 },
  { id: 'dc-11', name: 'Arjun Deshpande', team: 'Deccan Chargers', role: 'BAT',  cost: 7.5 },

  { id: 'kk-01', name: 'Nikhil Pawar',    team: 'Konkan Kings', role: 'WK',   cost: 9.0 },
  { id: 'kk-02', name: 'Devdutt Shenoy',  team: 'Konkan Kings', role: 'BAT',  cost: 11.0 },
  { id: 'kk-03', name: 'Salman Mirza',    team: 'Konkan Kings', role: 'BAT',  cost: 9.5 },
  { id: 'kk-04', name: 'Rishi Talwar',    team: 'Konkan Kings', role: 'BAT',  cost: 8.0 },
  { id: 'kk-05', name: 'Gaurav Naik',     team: 'Konkan Kings', role: 'AR',   cost: 10.5 },
  { id: 'kk-06', name: 'Yash Chavan',     team: 'Konkan Kings', role: 'AR',   cost: 9.0 },
  { id: 'kk-07', name: 'Manoj Salvi',     team: 'Konkan Kings', role: 'BOWL', cost: 9.5 },
  { id: 'kk-08', name: 'Zaid Shaikh',     team: 'Konkan Kings', role: 'BOWL', cost: 8.0 },
  { id: 'kk-09', name: 'Omkar Gaikwad',   team: 'Konkan Kings', role: 'BOWL', cost: 7.0 },
  { id: 'kk-10', name: 'Ashwin Prabhu',   team: 'Konkan Kings', role: 'AR',   cost: 7.5 },
  { id: 'kk-11', name: 'Siddharth Rao',   team: 'Konkan Kings', role: 'WK',   cost: 6.5 },
]
