import { create } from 'zustand';

interface AuthState {
    isLoggedIn: Boolean,
    setIsLoggedIn: (isLoggedIn: Boolean) => void
}

export const useAuth = create<AuthState>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn: isLoggedIn }),
}))
  