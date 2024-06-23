import { Message } from "@/components/ui/chat/data";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { motion } from "framer-motion";


interface UserMessageProps {
    message: Message
}

export const UserMessage = ({ message }: UserMessageProps) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
        transition={{
            opacity: { duration: 0.1 },
            layout: { type: "spring", bounce: 0.3, duration: 0.2 },
        }}
        style={{ originX: 0.5, originY: 0.5 }}
        className={"flex flex-col gap-2 p-4 whitespace-pre-wrap items-end"}
    >
        <div className="flex gap-3 items-center">
            <span className="bg-primary text-primary-foreground p-3 rounded-md max-w-xs">
                {message.message}
            </span>
            <Avatar className="bg-primary text-primary-foreground flex justify-center items-center">
                <AvatarImage
                    src={message.user.avatar}
                    alt={message.user.name}
                    width={6}
                    height={6}
                />
                <AvatarFallback
                    className="bg-primary text-primary-foreground"
                >
                    {getInitials(message.user.name)}
                </AvatarFallback>
            </Avatar>
        </div>
    </motion.div>
);

const getInitials = (str = "") => {
    if (!(typeof (str) === "string") || str.length == 0) {
        return "?"
    }
    return str.split(" ")
        .filter((s) => s.length > 0)
        .slice(0, 2)
        .map((s) => s.slice(0, 1).toUpperCase())
        .reduce((out_s, s) => (out_s += s + "."), "")
}


