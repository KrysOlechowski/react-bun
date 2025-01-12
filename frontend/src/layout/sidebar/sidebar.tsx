import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar_Content } from "@/layout/sidebar/sidebar_content";

type Props = {
  children?: React.ReactNode;
  isOpen?: boolean;
};

export default function Sidebar({ children, isOpen = false }: Props) {
  return (
    <SidebarProvider>
      <Sidebar_Content isOpen={isOpen} />
      <main>{children}</main>
    </SidebarProvider>
  );
}
