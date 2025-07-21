import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 py-12 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-headline">Caveman Software Hub</h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Building the future of development, one tool at a time. Drop us a line if you have any questions or want to collaborate.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Caveman Software. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 font-headline">Get in Touch</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
