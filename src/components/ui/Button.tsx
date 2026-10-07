import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-[0_1px_2px_rgb(11_31_58_/_0.12)] hover:bg-blue-hover hover:shadow-[0_6px_16px_rgb(0_80_138_/_0.22)]",
  secondary:
    "bg-white text-navy ring-1 ring-line-strong hover:bg-paper hover:ring-navy-soft/30",
  ghost: "bg-transparent text-blue hover:text-blue-hover",
  onDark:
    "bg-white text-navy hover:bg-mist",
  onDarkGhost:
    "bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10 hover:ring-white/60",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-[15px] font-medium tracking-[-0.01em] transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
