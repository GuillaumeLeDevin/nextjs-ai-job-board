import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";
import Link from "next/dist/client/link";
import { LogInIcon } from "lucide-react";
import { SignedOut } from "@/services/clerk/components/SignInStatus";
import { SidebarUserButton } from "./features/users/components/SidebarUserButton";

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
          <SidebarGroup>
            <SidebarMenu>
              <SignedOut>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/sign-in">
                      <LogInIcon />
                      <span>Log In</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SignedOut>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarUserButton />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

      </Sidebar>

      <main className="flex-1">test</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}