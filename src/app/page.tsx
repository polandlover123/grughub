import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Code, CheckCircle, Pilcrow } from 'lucide-react';

const tools = [
  {
    name: "Prehistoric Prettier",
    description: "An opinionated code formatter that works with many languages. Keep your codebase clean and consistent, the caveman way.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "code editor",
    icon: Code,
    link: "#",
  },
  {
    name: "JSON Validator Rock",
    description: "Validate and format your JSON files with the rugged reliability of a trusty rock. Finds errors with brute force.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "json data",
    icon: CheckCircle,
    link: "#",
  },
  {
    name: "Markdown Mammoth",
    description: "A powerful, yet simple Markdown editor for crafting your project documentation. As mighty as its namesake.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "markdown document",
    icon: Pilcrow,
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <section className="text-center mb-16 md:mb-24 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-headline">
            Build Better, Faster with Caveman
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your hub for robust Vitepress templates and powerful development tools.
            Streamline your workflow and create stunning documentation sites with ease.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#tools">
                Explore Tools <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="tools" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Development Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card key={tool.name} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader className="flex-row gap-4 items-center">
                  <tool.icon className="w-10 h-10 text-primary" />
                  <div>
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <Image
                        src={tool.image}
                        alt={tool.name}
                        width={600}
                        height={400}
                        className="rounded-md object-cover"
                        data-ai-hint={tool.dataAiHint}
                    />
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button asChild>
                      <a href={tool.link}>
                         Launch Tool <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
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
