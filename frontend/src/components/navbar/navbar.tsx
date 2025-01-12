import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/layout/sidebar/sidebar";

export function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="fixed right-0 p-2.5 w-12 h-12 z-50">
      <Menu size={32} onClick={() => setIsSidebarOpen((prev) => !prev)} />
      <Sidebar isOpen={isSidebarOpen}></Sidebar>
    </div>
  );
}
