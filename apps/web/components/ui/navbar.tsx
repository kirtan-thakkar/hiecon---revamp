"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from 'next-view-transitions';
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
  // update this items whenver you want to add any new item in the navbar
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
  ]

  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-7xl px-4">
        <div className="flex h-16 w-full items-center justify-between rounded-[2rem] border border-neutral-200 bg-white/85 px-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/85" />
      </nav>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-7xl px-4">
      {/* Navbar Container */}
      <div className="flex h-16 w-full items-center justify-between rounded-[2rem] border border-neutral-200 bg-transparent  px-6 shadow-2xl backdrop-blur-lg transition-all duration-300 dark:border-white/10 dark:bg-black/85">
        {/* Left: Logo Area */}
        <Link href="/" className="flex items-center gap-3 pl-2">
          <Image
            loading="lazy"
            alt="logo"
            src="/logo.svg"
            width={40}
            height={40}
            className="w-[32px] rounded-full md:w-[40px] dark:bg-transparent"
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
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-neutral-600 transition-colors duration-200 hover:text-black dark:text-neutral-400 dark:hover:text-white`}
                    render={<Link href={item.href}>{item.name}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Desktop Actions & Theme Toggle */}
        <div className="hidden items-center justify-end gap-4 pr-2 md:flex">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 hover:bg-white/20 dark:hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-neutral-300" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-600" />
            )}
          </button>

          <Link href="/contact">
            <button className="cursor-pointer rounded-xl bg-zinc-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile View Toggle & Menu Button */}
        <div className="flex items-center gap-2 pr-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-white/10"
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
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-white/10"
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

      {mobileMenuOpen && (
        <div className="absolute inset-x-4 top-20 z-50 flex animate-in flex-col gap-4 rounded-[2rem] border border-neutral-200 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-3xl backdrop-saturate-200 duration-200 fade-in slide-in-from-top-4 md:hidden dark:border-white/10 dark:bg-black/20">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="my-2 h-px bg-neutral-200 dark:bg-white/10" />

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full rounded-xl bg-zinc-900 py-3 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar