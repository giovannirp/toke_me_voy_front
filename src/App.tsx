import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <HomePage />
    </ThemeProvider>
  )
}

export default App
