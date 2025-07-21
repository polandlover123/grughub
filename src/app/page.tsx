

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { GrugIcon } from './contact/grug-icon';

const notes = [
  {
    name: "Grug Note Generation",
    description: "Grug uses big brain to create cool notes",
    href: "#",
  },
  {
    name: "Grug Note Chat",
    description: "Confused? Ask computer questions. It talk back. Like rock, but smarter.",
    href: "#",
  },
  {
    name: "Grug Note Repository",
    description: "Made by hand, by your classmates. For when Grug brain is full of rock.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="relative text-center mb-24 animate-in fade-in duration-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 radial-glow -z-10" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-primary">
                Caveman Software
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                (rhymes with grug)
            </p>
             <div className="flex justify-center items-center my-8">
                <GrugIcon className="h-40 w-40" />
            </div>
            <div className="mt-8 flex gap-4 justify-center">
                <Button size="lg" variant="outline" asChild className="rounded-full"><Link href="#tools">View Tools</Link></Button>
                <Button size="lg" variant="default" asChild className="rounded-full"><Link href="/contact">Contact Grug</Link></Button>
            </div>
        </section>

        <section id="tools" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-primary">Grug's Big Rocks</h2>
            <p className="text-muted-foreground mt-2">Tools to make you less dumb.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notes.map((note) => (
              <Card key={note.name} className="bg-card border-border/50 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 flex flex-col">
                <CardHeader>
                    <CardTitle className="text-xl">{note.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{note.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href={note.href}>
                            Go to Tool <ArrowRight className="ml-2 h-4 w-4" />
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
