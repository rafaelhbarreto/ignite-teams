import 'styled-components/native'
import theme from '../theme'

type themeType = typeof theme
declare module 'styled-components/native' {
  export interface DefaultTheme extends themeType {}
}