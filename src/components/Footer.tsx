import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/NewsletterForm";
import { footerNav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081628] text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="display text-lg font-semibold tracking-[-0.03em] text-white">
              Validate AI
            </p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
              {site.tagline}. An independent community interest company dedicated
              to improving how AI systems are validated.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-white/80 hover:text-white"
            >
              {site.email}
            </a>
          </div>

          <nav className="lg:col-span-4" aria-label="Footer">
            <p className="text-[12px] font-semibold tracking-[0.08em] text-white/45 uppercase">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-[12px] font-semibold tracking-[0.08em] text-white/45 uppercase">
              Newsletter
            </p>
            <p className="mt-4 mb-4 text-sm leading-6 text-white/65">
              Sign up for events and white papers.
            </p>
            <NewsletterForm />
            <div className="mt-6">
              <a
                href={site.twitter}
                className="text-sm text-white/75 transition-colors hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                Follow {site.twitterHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">
            © 2026 Validate AI CIC. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
