import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/config";

import { groupGetAll } from "./groupGetAll";

export async function groupCreate(group: string) {
  try {
    const groups = await groupGetAll();
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...groups, group]));
  } 
  catch (error) {
    console.error(error);
  }
}

