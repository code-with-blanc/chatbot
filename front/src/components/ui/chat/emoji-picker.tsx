'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { SmileIcon } from "lucide-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { cn } from "@/components/utils/utils";
import { buttonVariants } from "../button";

interface EmojiPickerProps {
    onChange: (value: string) => void;
}


export const EmojiPicker = ({
    onChange
}: EmojiPickerProps) => {

    return (
        <Popover>
            <PopoverTrigger
                className="outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <button
                    className={cn(
                        buttonVariants({ size: "icon" }),
                        "h-9 w-9 shrink-0 rounded transition",
                        "bg-primary hover:bg-primary/80"
                    )}
                >
                    <SmileIcon className="h-5 w-5" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <Picker
                    emojiSize={18}
                    theme="system"
                    data={data}
                    maxFrequentRows={1}
                    onEmojiSelect={(emoji: any) => onChange(emoji.native)}
                />
            </PopoverContent>
        </Popover>
    )
}
