import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GREEN_700};
  padding: 24px;
  padding-top: 50px
`

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`

