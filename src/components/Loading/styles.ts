import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  
  background-color: ${({ theme}) => theme.COLORS.GRAY_600}
`;

export const LoadingIndicator = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;