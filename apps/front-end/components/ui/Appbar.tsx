"use client"

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from 'react'

export function Appbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className='flex justify-between items-center p-4'>
                <div>uptime</div>
                <div className="flex items-center gap-4">
                    <div className="w-9 h-9" /> {/* Placeholder for theme toggle */}
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                </div>
            </div>
        )
    }

    return (
        <div className='flex justify-between items-center p-4'>
            <div>uptime</div>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                </button>
                <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
            </div>
        </div>
    )
}