import { Player } from "../../types/models";

interface PlayerCardProps {
  player: Player;
  className?: string | undefined;
}

export function PlayerCard({ player, className }: PlayerCardProps) {
  return (
    <>
      <div className={className}>{player.name}</div>
    </>
  );
}
