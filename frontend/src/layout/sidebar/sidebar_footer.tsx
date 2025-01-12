import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter as SidebarFooterUI,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SIDEBAR_CONTENT } from "@/const/SIDEBAR_CONTENT";
import { useUserStore } from "@/store/user/user";
import { User2, ChevronUp } from "lucide-react";

export function SidebarFooter() {
  const { userName } = useUserStore();
  return (
    <SidebarFooterUI>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> {userName ?? "Guest"}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              {SIDEBAR_CONTENT.footer_options.map((option) => {
                if (option?.url) {
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
                }
                if (option?.action) {
                  return (
                    <DropdownMenuItem
                      key={option.title}
                      onClick={option.action}
                    >
                      <span>
                        <option.icon />
                      </span>
                      <span>{option.title}</span>
                    </DropdownMenuItem>
                  );
                }
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooterUI>
  );
}
