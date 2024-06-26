import { useEffect } from "react";
import { ChatList } from "@/components/ui/chat/chat-list";
import ChatBottombar from "@/components/ui/chat/chat-bottombar";
import { cn } from "@/components/utils/utils";
import { useChatStore } from "@/store/chat/chat";
import { useUserStore } from "@/store/user/user";

const ChatPage = () => {
    const messages = useChatStore(state => state.messages)
    const sendMessage = useChatStore(state => state.sendMessage)
    const createShadowUser = useUserStore(state => state.createShadowUser)
    const user  = useUserStore(state => state.user)

    useEffect(() => {
        if(user === undefined) {
            createShadowUser()
        }
    }, [createShadowUser, user])
    
    return user ? (
        <main className={cn(
            "flex h-[calc(100dvh)] flex-col items-center justify-center gap-4",
            "p-4 md:px-24 py-32",
            "bg-background"
        )}>
            <div className="z-10 border rounded-md max-w-5xl w-full h-full text-sm lg:flex bg-card">
                <div className="flex flex-col justify-between w-full h-full">
                    <ChatList
                        messages={messages}
                        appUser={user}
                    />
                    <ChatBottombar
                        sendMessage={(newMessage) => {
                            sendMessage(newMessage)
                        }}
                        placeholder="New message..."
                    />
                </div>
            </div>
        </main>
    ) : <></>
};

export default ChatPage;