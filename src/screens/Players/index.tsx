import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { Alert, FlatList, TextInput } from 'react-native'
import { useEffect, useState, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/players/playerAddByGroup'
import { playersGetByGroupAndTeam } from '@storage/players/playersGetByGroupAndTeam'
import { NewPlayer } from '@storage/players/playerAddByGroup'
import { playerRemoveByGroup } from '@storage/players/playerRemoveByGroup'
import { groupRemoveByName } from '@storage/group/groupRemoveByName'

type RouteParams = {
  group: string
}

export function Players() {

  const navigator = useNavigation()
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<NewPlayer[]>([])
  
  const  route = useRoute()
  const { group } = route.params as RouteParams
  
  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(group, playerName)
      fetchPlayersByTeam()
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Remover pessoa', err.message)
      } else {
        Alert.alert('Remover pessoa', 'Ocorreu um erro ao remover uma pessoa')
        console.log(err)
      }
    }
  }

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Digite um nome para adicionar um jogador')
    } 

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(group, newPlayer)
      newPlayerNameInputRef.current?.blur()
      setNewPlayerName('')
      fetchPlayersByTeam()
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova pessoa', err.message)
      } else {
        Alert.alert('Nova pessoa', 'Ocorreu um erro ao adicionar uma nova pessoa')
        console.log(err)
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const players = await playersGetByGroupAndTeam(group, team)
      setPlayers(players)
    } catch (err) {
      console.log(err)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
    }
  }

  async function handleRemoveGroup(group: string) {
    try {
      await groupRemoveByName(group)
      navigator.navigate('groups')
    } catch (err) {
      Alert.alert('Turma', 'Ocorreu um erro ao remover a turma')
      console.log
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton /> 
      <Highlight 
        title={group} 
        subtitle='Adicione a galera e separe os times'
      />

      <Form>
        <Input 
          inputRef={newPlayerNameInputRef}
          placeholder='Nome da pessoa'
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon 
          icon="add"
          onPress={() => handleAddPlayer()}
        />
      </Form>


      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard 
            name={item.name} 
            onRemove={() => handleRemovePlayer(item.name)}  
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há jogadores cadastrados' />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && {flex: 1}
        ]}
      />

      <Button 
        text='Remover turma'
        type='SECONDARY'
        onPress={() => handleRemoveGroup(group)}
      />
    </Container>
  )
}