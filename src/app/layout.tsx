import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Independent expertise in AI assurance, risk and responsible implementation. Validate AI works across industry, academia, government and civil society to build trust in AI systems.",
  metadataBase: new URL("https://validateai.org"),
  openGraph: {
    title: `${site.name} — Building trust in AI`,
    description:
      "Independent expertise in AI assurance, risk and responsible implementation.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-navy">{children}</body>
    </html>
  );
}
