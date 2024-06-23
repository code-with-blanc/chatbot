import { Send, ThumbsUp } from "lucide-react";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/components/utils/utils";
import { buttonVariants } from "../button";
import { Textarea } from "../textarea";
import { EmojiPicker } from "./emoji-picker";

interface ChatBottombarProps {
    sendMessage: (newMessage: string) => void;
    placeholder: string;
}

export default function ChatBottombar({
    sendMessage,
    placeholder = ""
}: ChatBottombarProps) {
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleLike = () => {
        sendMessage("👍");
        setMessage("");
    };

    const handleSend = () => {
        if (message.trim()) {
            sendMessage(message.trim());
            setMessage("");

            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }

        if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault();
            setMessage((prev) => prev + "\n");
        }
    };

    return (
        <div className="p-2 flex justify-between w-full items-center gap-2">
            <AnimatePresence initial={false}>
                <motion.div
                    key="input"
                    className="w-full relative"
                    layout
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{
                        opacity: { duration: 0.05 },
                        layout: {
                            type: "spring",
                            bounce: 0.15,
                        },
                    }}
                >
                    <Textarea
                        autoComplete="off"
                        value={message}
                        ref={inputRef}
                        onKeyDown={handleKeyPress}
                        onChange={handleInputChange}
                        name="message"
                        placeholder={placeholder}
                        className={cn(
                            "w-full h-9 flex items-center",
                            "border rounded resize-none overflow-auto bg-background"
                        )}
                    />
                </motion.div>

                <div className="h-full flex flex-col justify-between">
                    {
                        message.trim() ? (
                            <SendButton onClick={handleSend} />
                        ) : (
                            <LikeButton onClick={handleLike} />
                        )
                    }
                    <EmojiPicker
                        onChange={(value) => {
                            setMessage(message + value)
                            if (inputRef.current) {
                                inputRef.current.focus();
                            }
                        }}
                    />
                </div>

            </AnimatePresence>
        </div>
    );
}

interface SendButtonProps {
    onClick: () => void
}

const SendButton = ({ onClick }: SendButtonProps) => (
    <button
        className={cn(
            buttonVariants({  size: "icon" }),
            "h-9 w-9 shrink-0 rounded transition",
            "bg-primary hover:bg-primary/80"
        )}
        onClick={onClick}
    >
        <Send size={20} />
    </button>
)

interface LikeButtonProps {
    onClick: () => void
}

const LikeButton = ({ onClick }: LikeButtonProps) => (
    <button
        className={cn(
            buttonVariants({ size: "icon" }),
            "h-9 w-9 shrink-0 rounded transition",
            "bg-primary hover:bg-primary/80"
        )}
        onClick={onClick}
    >
        <ThumbsUp size={20} />
    </button>
)
