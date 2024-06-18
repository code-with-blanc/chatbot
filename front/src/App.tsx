import { ThemeProvider } from "./components/theme/theme-provider";
import Login from "./pages/login/Login"

import '@/styles/globals.css';


function App() {
  return (
    <ThemeProvider defaultTheme="dark-blue" storageKey="ui-theme">
      <Login />
    </ThemeProvider>
  )
}

export default App
