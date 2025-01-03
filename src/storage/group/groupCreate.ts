import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/config";

import { groupGetAll } from "./groupGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(group: string) {
  try {
    const groups = await groupGetAll();

    const groupExists = groups.includes(group);
    
    if (groupExists) {
      throw new AppError('Já existe um grupo cadastrado com este nome');
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...groups, group]));
  } 
  catch (error) {
    throw error
  }
}

