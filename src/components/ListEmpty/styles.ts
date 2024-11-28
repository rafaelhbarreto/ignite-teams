
import { ThemeInterface } from "src/@types/styled";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;

  font-size: ${({theme}: ThemeInterface ) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}: ThemeInterface ) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}: ThemeInterface ) => theme.COLORS.GRAY_300};
`;