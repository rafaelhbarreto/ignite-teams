import React from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Group() {
  return (
    <Container>
      <Header />      
      <Highlight 
        title={"Turmas"} 
        subtitle={"Jogue com a sua turma"}
      />
    </Container>
  );
}