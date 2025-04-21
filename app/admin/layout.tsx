'use client'

import { Sidebar } from "@/components/admin/Sidebar"
import { Topbar } from "@/components/admin/Topbar"


export default function AdminLayout({ children }:{
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
            <Topbar />
      <main className="flex-1 p-6 bg-background text-foreground">
        {children}
      </main>
      </div>
    </div>
  )
}