import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePlayersCollectionId } from "@storage/config";
import { playerGetAll } from "./playerGetAll";

export async function playerRemoveByGroup(group: string, playerName: string) {
  try {
    const playersGroupId = makePlayersCollectionId(group);
    const players = await playerGetAll(group);
    const newPlayers = players.filter((player: { name: string }) => player.name !== playerName);
    await AsyncStorage.setItem(playersGroupId, JSON.stringify(newPlayers));
  } catch (err) {
    throw err;
  }
}