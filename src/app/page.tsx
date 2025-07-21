import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const notes = [
  {
    name: "Grug Note Generation",
    description: "Grug use big brain to make smart notes from rock scratchings.",
    href: "#",
  },
  {
    name: "Grug Note Chat",
    description: "Talk to Grug about notes. Grug help you understand hard things.",
    href: "#",
  },
  {
    name: "Grug Note Repository",
    description: "Even Grug has dumb days. All notes kept here so Grug no forget.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <section className="relative text-center md:text-left mb-16 md:mb-24 animate-in fade-in duration-700">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 radial-glow -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className='z-10'>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-primary">
                        Caveman Software
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
                        (rhymes with grug)
                    </p>
                    <div className="mt-8 flex gap-2 justify-center md:justify-start">
                        <Button size="lg" asChild><Link href="#tools">View Tools</Link></Button>
                        <Button size="lg" variant="secondary">Contact</Button>
                    </div>
                </div>
                <div className="relative h-64 md:h-auto flex items-center justify-center z-10">
                     <Image
                        src="https://placehold.co/400x400.png"
                        alt="Caveman"
                        width={400}
                        height={400}
                        className="object-contain"
                        data-ai-hint="caveman character"
                    />
                </div>
            </div>
        </section>

        <section id="tools" className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notes.map((note) => (
              <Card key={note.name} className="bg-card border-border/50 p-4 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <CardHeader className="p-2">
                    <CardTitle className="text-xl">{note.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 flex-grow">
                    <p className="text-muted-foreground">{note.description}</p>
                </CardContent>
                <CardFooter className="p-2 pt-4 mt-auto">
                    <Button asChild className="w-full">
                        <Link href={note.href}>
                            Go to Tool <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
