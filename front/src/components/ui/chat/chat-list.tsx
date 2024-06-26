import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { UserMessage } from "./user-message";
import { SystemMessage } from "./system-message";
import { Message } from "@/store/chat/chat";
import { User } from "@/store/user/user";

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

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
      >
        <AnimatePresence>
          {messages?.map((message, index) => (
            message.userId === appUser.id ? (
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
