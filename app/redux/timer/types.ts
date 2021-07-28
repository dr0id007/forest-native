export const Types = {
  SET_TIMER: 'SET_TIMER',
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
};

export interface ITimer {
  isRunning?: boolean;
  time?: number;
}
