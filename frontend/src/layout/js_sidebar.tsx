import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { JS_Sidebar_Content } from "@/layout/js_sidebar_content";

type Props = {
  children?: React.ReactNode;
  isOpen?: boolean;
};

export default function JS_Sidebar({ children, isOpen = false }: Props) {
  return (
    <SidebarProvider>
      <JS_Sidebar_Content isOpen={isOpen} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
