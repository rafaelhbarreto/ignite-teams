import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, ButtonIconStyleProps } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap,
  type?: ButtonIconStyleProps
}

export const ButtonIcon = ({icon, type = 'PRIMARY', ...rest}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon 
        name={icon} 
        type={type} 
      />
    </Container>
  )
}
