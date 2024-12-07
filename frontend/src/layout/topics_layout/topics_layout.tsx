import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { JS_SIDEBAR_SAMPLE_DATA } from "../js_sidebar/const";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export function TopicsLayout() {
  return (
    <div className="mx-auto max-w-[500px] border-solid border-2 border-sky-500">
      <SidebarProvider>
        <SidebarContent>
          {JS_SIDEBAR_SAMPLE_DATA.topics.map((main_topic, i) => {
            return (
              <Collapsible
                key={i}
                defaultOpen={false}
                className="group/collapsible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel asChild className="text-base">
                    <CollapsibleTrigger>
                      {main_topic.main_topic_title}
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <Collapsible>
                          <SidebarMenuItem className="flex items-center justify-around bg-slate-300 h-10">
                            <Button className="text-xs text-black bg-white p-2 hover:bg-slate-300 h-6">
                              Wszystkie
                            </Button>
                            <Button className="text-xs text-black bg-white p-2 hover:bg-slate-300 h-6">
                              Nieprzeczytane
                            </Button>
                            <Button className="text-xs text-black bg-white p-2 hover:bg-slate-300 h-6">
                              Resetuj
                            </Button>
                          </SidebarMenuItem>
                        </Collapsible>
                        {main_topic.sub_topics.map((item) => (
                          <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.is_default_open}
                            className="group/collapsible"
                          >
                            <SidebarMenuItem>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                  {item.icon && <item.icon />}
                                  <span>{item.title}</span>
                                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {item.items?.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                      <SidebarMenuSubButton asChild>
                                        <a href={subItem.url}>
                                          <span>{subItem.title}</span>
                                        </a>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </SidebarMenuItem>
                          </Collapsible>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            );
          })}
        </SidebarContent>
      </SidebarProvider>
    </div>
  );
}
