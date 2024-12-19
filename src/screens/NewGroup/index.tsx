import { Highlight } from "@components/Highlight";
import { Container, Icon } from "./styles";
import { Header } from "@components/Header";

export function NewGroup() {
  return (
    <Container>
      
      <Header showBackButton/>

      <Icon />
      <Highlight 
        title="Nova turma"
        subtitle="Crie uma nova turma para adicionar as pessoas"
      />
    </Container>
  );
}