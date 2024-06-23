import React, { useRef } from "react";
import { Message, User } from "@/components/ui/chat/data";
import { AnimatePresence } from "framer-motion";
import { UserMessage } from "./user-message";
import { SystemMessage } from "./system-message";

interface ChatListProps {
  messages?: Message[];
  appUser: User;
}

export function ChatList({ messages, appUser }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(messages)

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
      >
        <AnimatePresence>
          {messages?.map((message, index) => (
            message.user.id === appUser.id ? (
              <UserMessage key={index} message={message} />
            ) : (
              <SystemMessage key={index} message={message} />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
