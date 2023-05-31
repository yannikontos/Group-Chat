import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'system',
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ config })
const theme2 = extendTheme({ breakpoints })

export default theme