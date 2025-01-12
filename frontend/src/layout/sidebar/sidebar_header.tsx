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
  SidebarHeader as SidebarHeaderUI,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { SIDEBAR_CONTENT } from "@/const/SIDEBAR_CONTENT";

export function SidebarHeader() {
  return (
    <SidebarHeaderUI>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                {SIDEBAR_CONTENT.header_title}
                <ChevronDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
              {SIDEBAR_CONTENT.header_options.map((option) => {
                return (
                  <a href={option.url} key={option.title}>
                    <DropdownMenuItem key={option.title}>
                      <span>
                        <option.icon />
                      </span>
                      <span>{option.title}</span>
                    </DropdownMenuItem>
                  </a>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeaderUI>
  );
}
