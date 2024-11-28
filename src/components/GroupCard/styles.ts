import styled from "styled-components/native";
import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  flex-direction: row;
  height: 90px;
  margin-bottom: 12px;
  padding: 24px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.REGULAR}px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }: DefaultTheme) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;