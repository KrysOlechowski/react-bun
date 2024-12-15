import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { JAVASCRIPT_SIDEBAR } from "@/const/JAVASCRIPT/JAVASCRIPT_SIDEBAR";

export function JSSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                {JAVASCRIPT_SIDEBAR.header_title}
                <ChevronDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
              {JAVASCRIPT_SIDEBAR.header_options.map((option) => {
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
    </SidebarHeader>
  );
}
