import { ThemeProvider } from "./components/theme/theme-provider";
import ChatPage from "./pages/chat/Chat";
import Login from "./pages/login/Login"

import '@/styles/globals.css';


function App() {
  return (
    <ThemeProvider defaultTheme="dark-blue" storageKey="ui-theme">
      <ChatPage />
    </ThemeProvider>
  )
}

export default App
