const GROUP_COLLECTION = '@ignite-teams:groups'
const PLAYERS_COLLECTION = '@ignite-teams:players'

export function makePlayersCollectionId(group: string): string {
  const groupName = group.toLowerCase().replace(/\s/g, '-')
  return `${PLAYERS_COLLECTION}:${groupName}`
}

export { 
  GROUP_COLLECTION,
  PLAYERS_COLLECTION
}