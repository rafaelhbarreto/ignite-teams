import { ButtonContainer, ButtonText, buttonTypeStyleProps } from './styles'
import { Text, TouchableOpacityProps } from 'react-native'; 

type ButtonProps = TouchableOpacityProps & {
  text: string,
  type?: buttonTypeStyleProps
}

export function Button({type = 'PRIMARY', text, ...rest}: ButtonProps) {
  return (
    <ButtonContainer 
    type={type}
      {...rest}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}