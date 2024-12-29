import { useNavigation } from '@react-navigation/native' 
import { Container, Logo, BackButton, BackIcon } from './styles'
import LogoImg from '@assets/logo.png'

type HeaderProps = {
  showBackButton?: boolean
}


export function Header({ showBackButton = false }: HeaderProps) {
  const navigator = useNavigation()

  function handleGoback() {
    navigator.navigate('groups')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoback}>
          <BackIcon />
        </BackButton>
      }

      <Logo source={LogoImg} />
    </Container>
  )
}