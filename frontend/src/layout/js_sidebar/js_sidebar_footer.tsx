import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { JAVASCRIPT_SIDEBAR } from "@/const/JAVASCRIPT/JAVASCRIPT_SIDEBAR";
import { User2, ChevronUp } from "lucide-react";

export function JSSidebarFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> {JAVASCRIPT_SIDEBAR.footer_title}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              {JAVASCRIPT_SIDEBAR.footer_options.map((option) => {
                return (
                  <DropdownMenuItem key={option.title}>
                    <span>
                      <option.icon />
                    </span>
                    <span>{option.title}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
