import { RPSElement } from '@/shared/types/element';

export type OnSocketConnectionStatusCb = (args: { username: string }) => void;

export type OnGameFinishedCb = (args: {
  results: { username: string; choice: RPSElement }[];
}) => void;
