import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePlayersCollectionId} from "@storage/config";

export async function playerGetAll(group: string) {
  try {
    const playersGroupId = makePlayersCollectionId(group);
    const players = await AsyncStorage.getItem(playersGroupId);

    return players ? JSON.parse(players) : [];
  } catch (err) {
    throw err
  }
}