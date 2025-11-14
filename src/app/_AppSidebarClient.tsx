"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function AppSidebarClient({ children } : { children: React.ReactNode }) {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <div className="flex flex-col w-full">
                <div className="p-2 border-b flex items-center gap-1" >
                    <SidebarTrigger />
                    <h1 className="text-xl text-nowrap">GLD Job Search</h1>
                </div>
                <div className="flex-1 flex">{children}</div>
            </div>
        );
    }

    return children;
}