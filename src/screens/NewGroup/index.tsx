import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight 
          title="Nova turma"
          subtitle="Crie uma nova turma para adicionar as pessoas"
        />
        <Button 
          text="Criar"
        />
      </Content>
    </Container>
  );
}