export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 py-12 bg-background">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-primary">Caveman Notes</h3>
            <p className="text-muted-foreground mb-4 max-w-sm mx-auto">
              Quality notes for modern learners.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Caveman Notes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
