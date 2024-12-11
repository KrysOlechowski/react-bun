import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { JS_SIDEBAR_SAMPLE_DATA } from "../js_sidebar/const";
import {
  ArrowBigRightDash,
  ChevronDown,
  ChevronRight,
  Home,
  MoreHorizontal,
  Shuffle,
} from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { randomIntFromInterval } from "@/utils/numbers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopicsLayout() {
  return (
    <div className="mx-auto max-w-[500px] border-solid border-2 border-sky-500">
      <SidebarProvider>
        <SidebarContent>
          {JS_SIDEBAR_SAMPLE_DATA.topics.map((main_topic, i) => {
            const progressValue = randomIntFromInterval(1, 100);

            return (
              <Collapsible
                key={i}
                defaultOpen={main_topic?.is_default_open}
                className="group/collapsible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel asChild className="text-base">
                    <>
                      <CollapsibleTrigger>
                        <div className="flex flex-row ">
                          {main_topic.main_topic_title}
                          {/* <span className="text-xs">100%</span> */}
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </div>
                      </CollapsibleTrigger>
                      <div className="flex flex-row items-center">
                        <Progress
                          value={progressValue}
                          className="w-[250px] h-1 my-1"
                        />
                        <span className="text-xs ml-4">{progressValue}%</span>
                      </div>
                    </>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <Collapsible>
                          <SidebarMenuItem className="pr-10 flex items-center  bg-slate-300 h-10">
                            <Button className="mr-3 text-xs text-black bg-white p-2 hover:bg-slate-300 h-6">
                              Random
                              <span>
                                <Shuffle />
                              </span>
                            </Button>
                            <Button className="text-xs text-black bg-white p-2 hover:bg-slate-300 h-6">
                              Następny: 3.2.2. Floating-Point Literals{" "}
                              <span>
                                <ArrowBigRightDash />
                              </span>
                            </Button>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <SidebarMenuAction>
                                  <MoreHorizontal />
                                </SidebarMenuAction>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent side="right" align="start">
                                <DropdownMenuItem>
                                  <span>Reset Progress</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <span>Mark all done</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </SidebarMenuItem>
                        </Collapsible>
                        {main_topic.sub_topics.map((item) => {
                          const lessonsProgress = randomIntFromInterval(0, 4);
                          return (
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
                                    <span>
                                      {lessonsProgress}/{lessonsProgress + 3}
                                    </span>
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
                          );
                        })}
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
