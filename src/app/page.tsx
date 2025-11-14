import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";

export default function HomePage() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
      <Sidebar collapsible="icon" className="overflow-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <h1 className="text-xl text-nowrap">GLD Job Search</h1>
        </SidebarHeader>

        <SidebarContent>
          {/* Main content goes here */}
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>test</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

      </Sidebar>

      <main className="flex-1">test</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}