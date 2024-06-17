import { create } from 'zustand';

export const useAuth = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}))