'use client'
import { ThemeToggle } from "@/app/components/theme-toogle"

export function Topbar(){
    return (
        <header className="flex items-center justify-between px-6 py-3 border-b dark:border-slate-700 bg-white dark:bg-slate-900">
            <h2 className="text-xl font-medium">Panel Administrativo</h2>
            <ThemeToggle />
        </header>
    )
}