"use client";

import { useTheme } from "next-themes";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@workspace/ui/lib/utils";

export function FooterStarsBackground() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      <StarsBackground
        starColor={resolvedTheme === 'dark' ? '#FFF' : '#000'}
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          'dark:bg-[radial-gradient(ellipse_at_top,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_top,_#f5f5f5_0%,_#fff_100%)]',
        )}
      />
    </div>
  );
}
