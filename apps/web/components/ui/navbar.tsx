"use client"

import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const Navbar = () => {
  const navItems = [
    {
      name: "Services",
      href: "/services", 
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Technology Partners", 
      href: "/technology-partners",
    }
  ]

  const [mounted, setMounted] = useState(false)

  // Adjusted media queries: Mobile (< 768px) and Tablet/Desktop (>= 768px)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="sticky top-4 z-50 mx-auto w-full max-w-300 px-4">
      <div className="flex h-21 w-full items-center justify-between rounded-[2rem] border border-neutral-200 bg-white/95 px-4 shadow-sm backdrop-blur-md">
        
        {/* Left: Logo Area */}
        <div className="flex min-w-37.5 items-center gap-3 pl-2">
          <Image
            loading="lazy"
            alt="logo"
            src="/logo.svg"
            width={70}
            height={70}
            className="w-[80px]"
          />
          <span className="text-4xl font-black tracking-tight text-red-600">
            HIECON
          </span>
        </div>

        {isTabletOrDesktop ? (
          <>
            {/* Center: Navigation Menu mapped from navItems */}
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-neutral-600 hover:text-black`}
                      render={<Link href={item.href}>{item.name}</Link>}
                    />
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right: Auth / Action Buttons */}
            <div className="flex min-w-[150px] items-center justify-end gap-6 pr-2">
              <Link
                href="/signin"
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
              >
                Sign in
              </Link>
              <button className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-105 hover:bg-black">
                Get started
              </button>
            </div>
          </>
        ) : (
          /* Mobile View */
          <div className="flex items-center pr-2">
            <span className="cursor-pointer text-sm font-medium text-neutral-600">
              Menu
            </span>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar