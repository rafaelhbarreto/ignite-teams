import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePlayersCollectionId } from "@storage/config";
import { playerGetAll } from "./playerGetAll";
import { AppError } from "@utils/AppError";

export type NewPlayer = {
  name: string,
  team: string
}

export async function playerAddByGroup(group: string, newPlayer: NewPlayer) {
  try {
    const players = await playerGetAll(group);
    const playerExists = players.filter((player: NewPlayer) => player.name === newPlayer.name).length > 0;

    if (playerExists) {
      throw new AppError('Já existe uma pessoa adicionada em um time aqui.');
    }

    const playersGroupId = makePlayersCollectionId(group);
    await AsyncStorage.setItem(playersGroupId, JSON.stringify([...players, newPlayer]));
    
  } catch (err) {
    throw err
  }
}