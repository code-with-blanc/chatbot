import { create } from "zustand";
import { useUserStore } from "../user/user";
import { sendMessage } from "@/api/chatApi";

export interface Message {
    id: string | undefined;
    message: string;
    userId: string;
}

export interface ChatState {
    messages: Message[]
    isBotWriting: boolean
    sendMessage: (msg: string) => void
}

let userMsgCount = 1;
const initialBotMessage: Message = {
    id: '0',
    userId: 'bot',
    message: 'Hello, I am your AI assistant!',
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [initialBotMessage],
    isBotWriting: false,
    sendMessage: async (msg) => {
        const userId = useUserStore.getState().user?.id
        if (userId === null || userId === undefined) {
            console.warn(`Attempt to send message but userId is ${userId}`)
            return;
        }

        const newMsg : Message = {
            id: userMsgCount.toString(),
            userId: userId,
            message: msg,
        }
        userMsgCount += 1;

        set((state) => ({
            messages: [...state.messages, newMsg]
        }))

        set({ isBotWriting: true })
        const response : any = await sendMessage(msg)
        set((state) => ({
            isBotWriting: false,
            messages: [...state.messages, response.botResponse]
        }))
    },
}))
