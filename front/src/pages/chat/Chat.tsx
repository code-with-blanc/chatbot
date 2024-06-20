import { useEffect, useState } from "react";
import { userData } from "./data";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/components/utils/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sidebar } from "./sidebar";
import { Chat } from "@/components/ui/chat/chat";

const ChatPage = () => {
    const layout = [8, 29];
    const defaultLayout = layout ? layout : undefined;
  
    return (
      <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
        <div className="flex justify-between max-w-5xl w-full items-center">
          <a href="#" className="text-4xl font-bold text-gradient">shadcn-chat</a>
          <a
            href="https://github.com/jakobhoeg/shadcn-chat"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-10 w-10"
            )}
          >
            <div className="w-7 h-7 text-muted-foreground" />
          </a>
        </div>
  
        <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
          <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </div>
  
        <div className="flex justify-between max-w-5xl w-full items-start text-xs md:text-sm text-muted-foreground ">
        <p className="max-w-[150px] sm:max-w-lg">Built by <a className="font-semibold" href="https://github.com/jakobhoeg/">Jakob Hoeg</a>. To be used with <a className="font-semibold" href="https://ui.shadcn.com/">shadcn</a>.</p>
        <p className="max-w-[150px] sm:max-w-lg text-right">Source code available on <a className="font-semibold" href="https://github.com/jakobhoeg/shadcn-chat">GitHub</a>.</p>
        </div>
      </main>
    )
};

interface ChatLayoutProps {
    defaultLayout: number[] | undefined;
    defaultCollapsed?: boolean;
    navCollapsedSize: number;
}  

const ChatLayout = ({
    defaultLayout = [320, 480],
    defaultCollapsed = false,
    navCollapsedSize,
  }: ChatLayoutProps) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [selectedUser, setSelectedUser] = useState(userData[0]);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Initial check
      checkScreenWidth();
  
      // Event listener for screen width changes
      window.addEventListener("resize", checkScreenWidth);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", checkScreenWidth);
      };
    }, []);
  
    return (
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={isMobile ? 0 : 24}
          maxSize={isMobile ? 8 : 30}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
          className={cn(
            isCollapsed && "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
          )}
        >
          <Sidebar
            isCollapsed={isCollapsed || isMobile}
            links={userData.map((user) => ({
              name: user.name,
              messages: user.messages ?? [],
              avatar: user.avatar,
              variant: selectedUser.name === user.name ? "grey" : "ghost",
            }))}
            isMobile={isMobile}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Chat
            messages={selectedUser.messages}
            selectedUser={selectedUser}
            isMobile={isMobile}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
  

export default ChatPage;