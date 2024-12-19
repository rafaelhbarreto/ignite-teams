import { TouchableOpacityProps } from 'react-native'
import { Container, Icon } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  
}

export const ButtonIcon = ({ }: ButtonIconProps) => {
  return (
    <Container>
      <Icon name="home" type='PRIMARY' />
    </Container>
  )
}
