import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from '../config'

export async function groupGetAll() {
  try {
    const groups = await AsyncStorage.getItem(GROUP_COLLECTION)
    return groups ? JSON.parse(groups) : []
  } catch (err) {
    console.log(err)
  } 
}