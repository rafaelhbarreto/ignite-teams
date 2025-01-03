import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {

  const [group, setGroup] = useState<string>('')
  const navigator = useNavigation()

  async function handleNew() {
    try {

      if(!group.trim().length) {
        return Alert.alert('Novo grupo', 'Informe o nome do grupo')
      }

      await groupCreate(group)
      navigator.navigate('players', { group })
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert('Novo grupo', err.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo')
        console.log(err)
      }
    }
  }

  return (
    <Container>
      
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight 
          title="Nova turma"
          subtitle="Crie uma nova turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button 
          style={{marginTop: 20}}
          text="Criar"
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}