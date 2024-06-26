import { ThemeProvider } from "./components/theme/theme-provider";
import ChatPage from "./pages/chat/ChatPage";

import '@/styles/globals.css';


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <ChatPage />
    </ThemeProvider>
  )
}

export default App
