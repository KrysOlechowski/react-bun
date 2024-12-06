import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { React_Sidebar_Content } from "@/layout/react_sidebar_content";

type Props = {
  children?: React.ReactNode;
  isOpen?: boolean;
};

export default function React_Sidebar({ children, isOpen = false }: Props) {
  return (
    <SidebarProvider>
      <React_Sidebar_Content isOpen={isOpen} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
