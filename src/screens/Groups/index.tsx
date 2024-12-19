import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {

  const [groups, setGroups] = useState<string[]>([
    'Grupo 1',
    'Grupo 2'
  ]);

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
          <GroupCard title={item}/>
        )}
        contentContainerStyle={ groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message={"Que tal cadastrar a primeira turma?"} />
        )}
      />

      <Button text="Criar nova turma"/>

    </Container>
  );
}