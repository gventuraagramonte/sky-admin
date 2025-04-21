'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(()=>setMounted(true),[])

    if(!mounted) return null

    return(
        <Button 
            variant="ghost" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="absolute top-4 right-4 rounded-full shadow-md border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
        >
            {theme === "dark" ? (<MdOutlineLightMode className="h-5 w-5 text-yellow-400"/>) : (<MdOutlineDarkMode className="h-5 w-5 text-gray-800"/>)}

        </Button>
    )
}