import React, { useState, useCallback } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { groupGetAll } from '@storage/group/groupGetAll'

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');  
  }

  async function fetchGroups() {
    try {
      const groups = await groupGetAll()
      setGroups(groups)
    } catch (err) {
      console.log(err)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />      
      <Highlight 
        title={"Turmas"} 
        subtitle={"Jogue com a sua turma"}
      />

      <FlatList 
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={ groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message={"Que tal cadastrar a primeira turma?"} />
        )}
      />

      <Button 
        text="Criar nova turma"
        onPress={handleNewGroup}
      />

    </Container>
  );
}