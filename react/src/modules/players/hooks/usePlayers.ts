import { useEntities } from './useEntities';
import { Player } from '../types/models';

export function usePlayers():Array<Player> {
  const { entities: { players: { byId } } } = useEntities();

  return Object.keys(byId).map(playerId => byId[playerId]);
}