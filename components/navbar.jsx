"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" aria-label="Enterprise AI Homepage">
            <span className="text-2xl font-semibold tracking-tighter text-blue-500">Techonsy</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden md:flex items-center gap-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                <div className="flex flex-col gap-4 mt-4">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex justify-center">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </SignedIn>
                  <ThemeToggle />
                 
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}