import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, makePlayersCollectionId } from "@storage/config";
import { playerGetAll } from "@storage/players/playerGetAll";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { groupGetAll } from "./groupGetAll";

async function removePlayersFromGroup(group: string) {
  try {
    const players = await playerGetAll(group);
  
    for (const player of players) {
      await playerRemoveByGroup (group, player.name);
    }
  } catch (err) {
    throw err;
  }
}

async function removeGroup(groupName: string) {
  try {
    const groups = await groupGetAll() 
    const newGroups = groups.filter((group: string) => group !== groupName);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));
    
  } catch (err) {
    throw err;
  }
}
 
export async function groupRemoveByName(group: string) {
  try {
    await removePlayersFromGroup(group);
    await removeGroup(group);
  } catch (err) {
    throw err
  }
}