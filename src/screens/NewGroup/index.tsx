import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {

  const [group, setGroup] = useState<string>('')
  const navigator = useNavigation()

  function handleNew() {
    navigator.navigate('players', {group})
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