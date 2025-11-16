"use client";

export function SidebarUserButtonClient({ 
    user 
}: {
     user: {
        email: string | null; 
        name: string | null 
    }
}) {
  return (
    <div className="p-4 border-t">
      <p className="font-semibold">{user.name || "Guest User"}</p>
      <p className="text-sm text-gray-500">{user.email || "No email provided"}</p>
    </div>
  );
}