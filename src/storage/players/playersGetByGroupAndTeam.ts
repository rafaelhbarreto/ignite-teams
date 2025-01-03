import { playerGetAll } from "./playerGetAll";

export async function playersGetByGroupAndTeam(group: string, team: string)
{
  try {
    const playersGroup = await playerGetAll(group);
    return playersGroup.filter((player: { team: string }) => player.team === team);
  } catch (err) {
    throw err
  }
}