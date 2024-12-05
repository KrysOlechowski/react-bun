import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { React_Sidebar_Content } from "@/layout/react_sidebar_content";

export default function React_Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <React_Sidebar_Content />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
