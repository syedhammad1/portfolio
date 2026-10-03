import Link from "next/link";

type Props = { href: string; download?: string; className?: string; children: React.ReactNode };

// Internal routes use client-side navigation; external links open in a new tab.
export default function NavLink({ href, download, className, children }: Props) {
  return download ? (
    <a href={href} download={download} className={className}>
      {children}
    </a>
  ) : href.startsWith("http://") || href.startsWith("https://") ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
