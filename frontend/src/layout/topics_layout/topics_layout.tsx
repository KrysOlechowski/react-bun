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
import { JAVASCRIPT_TOPICS } from "@/const/JAVASCRIPT/JAVASCRIPT_TOPICS";

export function TopicsLayout() {
  const TOPICS = JAVASCRIPT_TOPICS;
  //   const TOPICS = JS_SIDEBAR_SAMPLE_DATA;

  return (
    <div className="mx-auto max-w-[500px] border-solid border-2 border-sky-500">
      <SidebarProvider>
        <SidebarContent>
          {TOPICS.topics.map((main_topic, i) => {
            const progressValue = randomIntFromInterval(1, 100);

            return (
              <Collapsible
                key={i}
                defaultOpen={main_topic.is_default_open}
                className="group/collapsible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel asChild className="text-base">
                    <>
                      <CollapsibleTrigger>
                        <div className="flex flex-row ">
                          {main_topic.title}
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
                              Następny: 1.1.1. Integer Literals
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
                        {main_topic.sub_topics.map((sub_topic) => {
                          const lessonsProgress = randomIntFromInterval(0, 4);
                          return (
                            <Collapsible
                              key={sub_topic.title}
                              asChild
                              defaultOpen={sub_topic.is_default_open}
                              className="group/collapsible"
                            >
                              <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                  <SidebarMenuButton tooltip={sub_topic.title}>
                                    {sub_topic.icon && <sub_topic.icon />}
                                    <span>{sub_topic.title}</span>
                                    <span>
                                      {lessonsProgress}/{lessonsProgress + 3}
                                    </span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                  </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <SidebarMenuSub>
                                    {sub_topic.lessons.map((lesson) => (
                                      <SidebarMenuSubItem key={lesson.title}>
                                        <SidebarMenuSubButton asChild>
                                          <a href={lesson.url}>
                                            <span>{lesson.title}</span>
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
