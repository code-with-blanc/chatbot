import { useState } from "react";
import { Message, userData } from "./data";
import { ChatList } from "@/components/ui/chat/chat-list";
import ChatBottombar from "@/components/ui/chat/chat-bottombar";

const ChatPage = () => {
    const [messages, setMessages] = useState(userData.messages);
    const handleSendMessage = (newMessage: Message) => {
        setMessages([
            ...messages,
            newMessage
        ])
    };

    return (
        <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
            <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
                <div className="flex flex-col justify-between w-full h-full">
                    <ChatList
                        messages={messages}
                        selectedUser={userData}
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