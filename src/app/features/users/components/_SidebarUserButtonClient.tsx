"use client";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown } from "lucide-react";

type User = {
    name: string;
    imageUrl: string;
    email: string;
}

export function SidebarUserButtonClient({ 
    user 
}: {
     user: User
}) {
  const { isMobile } = useIsMobile();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <UserInfo {...user} />
                <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
            </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>Hi</DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserInfo({imageUrl, email, name}: User) {

    const nameInitials = name
        .split(" ")
        .slice(0, 2)
        .map(str => str[0])
        .join("")

    return (
        <div className="flex items-center gap-2 overflow-hidden">
            <Avatar className=" size-8">
                <AvatarImage src={imageUrl} alt={name} />
                <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                    {nameInitials}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden">
                <span className="truncate text-sm font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
            </div>
        </div>
    )
}