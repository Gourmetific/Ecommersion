import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl mb-4 inline-block">
              Ecommersion
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Connecting shoppers with globally loved products, one store at a
              time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/our-story"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p className="mt-4">info@ecommersion.com</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Ecommersion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
