import userAPI from '@/api/userApi';
import { create } from 'zustand';

export interface User {
    id: string;
    name: string;
    avatar: string;
}

interface AuthState {
    user: User | undefined
    createShadowUser: () => void
}

export const useUserStore = create<AuthState>()((set) => ({
    user: undefined,
    createShadowUser: async () => {
        const user = await userAPI.createShadowUser()
        console.log(user)
        set({ user })
    },
}))