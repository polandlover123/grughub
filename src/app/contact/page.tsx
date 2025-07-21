import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Github, Globe, Instagram } from 'lucide-react';

const contactLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cavemansoftware/',
    handle: '@cavemansoftware',
    icon: <Instagram className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Website',
    href: 'https://cavemansoftware.org',
    handle: 'Cavemansoftware.org',
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/cavemansoftware',
    handle: 'github.com/cavemansoftware',
    icon: <Github className="h-6 w-6 text-primary" />,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-primary">Contact Grug</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">Grug easy to find. Here where to look.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
            <Card key={link.name} className="bg-card border-border/50 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">{link.name}</CardTitle>
                {link.icon}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 break-words">{link.handle}</p>
                <Button asChild className="w-full">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    Follow Grug <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
