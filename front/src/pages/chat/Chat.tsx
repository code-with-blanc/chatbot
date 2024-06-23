import { useState } from "react";
import { sampleMessages, appUser } from "../../components/ui/chat/data";
import { ChatList } from "@/components/ui/chat/chat-list";
import ChatBottombar from "@/components/ui/chat/chat-bottombar";
import { cn } from "@/components/utils/utils";

const ChatPage = () => {
    const [messages, setMessages] = useState(sampleMessages);
    const handleSendMessage = (newMessage: string) => {
        setMessages([
            ...messages,
            {
                id: (messages.at(-1)?.id ?? 0) + 1,
                message: newMessage,
                user: appUser,
            }
        ])
    };

    return (
        <main className={cn(
            "flex h-[calc(100dvh)] flex-col items-center justify-center gap-4",
            "p-4 md:px-24 py-32",
            "bg-background"
        )}>
            <div className="z-10 border rounded-md max-w-5xl w-full h-full text-sm lg:flex bg-card">
                <div className="flex flex-col justify-between w-full h-full">
                    <ChatList
                        messages={messages}
                        appUser={appUser}
                    />
                    <ChatBottombar
                        sendMessage={(m) => {handleSendMessage(m)}}
                        placeholder="New message..."
                    />
                </div>
            </div>  
        </main>
    )
};

export default ChatPage;