import Link from "next/link";
import { Dna } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-md items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Caveman Software
            </span>
          </Link>
        </div>

        <nav className="flex flex-1 items-center justify-end space-x-1">
           <Button variant="link" size="sm" className="text-muted-foreground">
             Beta 0.0.9
           </Button>
        </nav>
      </div>
    </header>
  );
}
