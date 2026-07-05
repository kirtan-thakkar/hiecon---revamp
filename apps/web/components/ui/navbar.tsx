"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const Navbar = () => {
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
    { name: "Technology Partners", href: "/technology-partners" },
  ]

  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-full max-w-7xl px-4">
        <div className="flex h-16 w-full items-center justify-between rounded-[2rem] border border-neutral-200 bg-white/85 px-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/85" />
      </nav>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-full max-w-7xl px-4">
      {/* Navbar Container */}
      <div className="flex h-16 w-full items-center justify-between rounded-[2rem] border border-neutral-200 bg-white/85 px-6 shadow-sm backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-black/85">
        
        {/* Left: Logo Area */}
        <Link href="/" className="flex items-center gap-3 pl-2">
          <Image
            loading="lazy"
            alt="logo"
            src="/logo.svg"
            width={40}
            height={40}
            className="w-[32px] md:w-[40px] dark:bg-transparent rounded-full"
          />
          <span className="text-2xl font-black tracking-tight text-red-600 dark:text-red-500">
            HIECON
          </span>
        </Link>

        {/* Center: Desktop Navigation Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-200`}
                    render={<Link href={item.href}>{item.name}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Desktop Actions & Theme Toggle */}
        <div className="hidden md:flex items-center justify-end gap-4 pr-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-neutral-300" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-600" />
            )}
          </button>

          <Link href="/contact">
            <button className="rounded-xl bg-zinc-900 dark:bg-white px-5 py-2 text-sm font-medium text-white dark:text-black shadow-sm transition-all duration-200 hover:scale-105 hover:bg-black dark:hover:bg-neutral-200 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile View Toggle & Menu Button */}
        <div className="flex md:hidden items-center gap-2 pr-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-neutral-300" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-600" />
            )}
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors duration-200"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Dropdown Overlay) */}
      {mobileMenuOpen && (
        <div className="absolute top-20 inset-x-4 z-50 p-6 rounded-[2rem] border border-neutral-200 bg-white/95 dark:border-white/10 dark:bg-black/95 shadow-xl backdrop-blur-lg flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium text-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="h-px bg-neutral-200 dark:bg-white/10 my-2" />

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full rounded-xl bg-zinc-900 dark:bg-white py-3 text-base font-semibold text-white dark:text-black shadow-md hover:bg-black dark:hover:bg-neutral-200 transition-colors duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar