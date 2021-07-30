export const Types = {
  FETCH_HISTORY: 'FETCH_HISTORY',
  SAVE_SESSION: 'SAVE_SESSION',
  DELETE_SESSION: 'DELETE_SESSION',
};

export type SessionType = {
  id?: string;
  duration?: number;
  start_time?: string;
  completed?: boolean;
  date?: string;
};

export interface ISession {
  currentSession?: SessionType;
  sessions?: SessionType[];
}
