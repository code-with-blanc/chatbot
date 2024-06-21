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

interface EmojiPickerProps {
    onChange: (value: string) => void;
}


export const EmojiPicker = ({
    onChange
}: EmojiPickerProps) => {

  return (
    <Popover>
        <PopoverTrigger>
            <div
                className={cn(
                    "h-9 w-9 rounded flex justify-center items-center",
                    "bg-muted",
                    "text-muted-foreground hover:text-foreground transition"
                )}
            >
                <SmileIcon className="h-5 w-5" />
            </div>
        </PopoverTrigger>
        <PopoverContent className="w-full">
            <Picker
            emojiSize={18}
            theme="system"
            data={data}
            maxFrequentRows={1}
            onEmojiSelect = {(emoji: any) => onChange(emoji.native)}
            />
        </PopoverContent>
    </Popover>
  )
}
