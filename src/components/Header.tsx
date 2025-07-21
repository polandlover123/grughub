import Link from "next/link";
import { Github, Instagram, Search, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Caveman Notes
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-9 bg-muted/50" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-card px-1.5 font-mono text-[10px] font-medium opacity-100">
                        <span className="text-sm">Ctrl</span>K
                    </kbd>
                </div>
            </div>
        </div>

        <nav className="flex items-center space-x-2">
          <Button variant="link" asChild>
            <Link href="#notes">Notes</Link>
          </Button>
           <Button variant="link" size="sm" className="text-muted-foreground">
             Beta 0.0.9
           </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
