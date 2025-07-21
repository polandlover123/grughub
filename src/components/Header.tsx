import Link from "next/link";
import { GrugIcon } from "@/app/contact/grug-icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <GrugIcon className="h-8 w-8" />
            <span className="font-bold sm:inline-block">
              Caveman Software
            </span>
          </Link>
        </div>

        <div className="flex items-center">
            <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_4px_hsl(var(--primary))]">
                Contact
            </Link>
        </div>
      </div>
    </header>
  );
}
