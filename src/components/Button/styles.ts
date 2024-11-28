import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export type buttonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = TouchableOpacityProps &{
  type: buttonTypeStyleProps
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  width: 100%;
  min-height: 46px;
  max-height: 46px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => {
    console.log(type)
    return type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK
  }};
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;