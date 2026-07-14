"use client";

import { Link } from "next-view-transitions";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-background pt-24 md:pt-28 pb-32 flex flex-col items-center justify-center selection:bg-brand-primary selection:text-primary-foreground">
      <Container className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
        >
          Error 404
        </motion.p>
        
        <TextAnimate 
          animation="blurInUp" 
          as="h1" 
          by="word"
          className="text-7xl md:text-9xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
        >
          System Offline.
        </TextAnimate>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
        >
          The page you are looking for has been moved, deleted, or does not exist. Please check the URL or return to the main dashboard.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/">
            <Button size="lg" className="h-14 rounded-full px-8 text-lg font-medium">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </main>
  );
}
