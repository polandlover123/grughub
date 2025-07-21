import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const templates = [
  {
    name: "Minimalist Documentation",
    description: "A clean, content-focused template perfect for project documentation and knowledge bases. No frills, just clarity.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "software documentation",
  },
  {
    name: "Tech Blog Pro",
    description: "A feature-rich template for technical bloggers. Includes syntax highlighting, tagging, and a sleek, readable layout.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "tech blog",
  },
  {
    name: "API Reference",
    description: "An organized template designed specifically for API documentation. Three-column layout for easy navigation.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "api reference",
  },
];

const tools = [
  {
    name: "Markdown Linter",
    description: "Ensure your markdown files are consistent and error-free. Our linter integrates directly into your CI/CD pipeline, checking for formatting issues, broken links, and more. Keep your documentation pristine with automated checks.",
    image: "https://placehold.co/800x450.png",
    dataAiHint: "code linter",
  },
  {
    name: "Code Snippet Manager",
    description: "A browser extension and desktop app to save, tag, and quickly access your most-used code snippets. Sync across devices and share with your team to boost productivity and maintain coding standards.",
    image: "https://placehold.co/800x450.png",
    dataAiHint: "code manager",
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
              <Link href="#templates">
                Explore Templates <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="templates" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Vitepress Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.name} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                    <CardTitle>{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <Image
                        src={template.image}
                        alt={template.name}
                        width={600}
                        height={400}
                        className="rounded-md object-cover"
                        data-ai-hint={template.dataAiHint}
                    />
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="secondary" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild>
                      <a href="#">
                        <Download className="mr-2 h-4 w-4" /> Get Template
                      </a>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="tools" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Our Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
            {tools.map((tool) => (
               <Card key={tool.name} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                 <div className="md:grid md:grid-cols-2 md:items-center">
                    <div className="p-0">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={800}
                        height={450}
                        className="object-cover h-full w-full"
                        data-ai-hint={tool.dataAiHint}
                      />
                    </div>
                    <div className="p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl">{tool.name}</CardTitle>
                      </CardHeader>
                      <CardDescription className="mb-6 text-base">{tool.description}</CardDescription>
                      <CardFooter className="p-0">
                        <Button asChild>
                          <a href="#">
                            Access Tool <ArrowRight className="ml-2" />
                          </a>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
               </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
