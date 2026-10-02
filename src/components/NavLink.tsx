import Link from "next/link";

type Props = { href: string; download?: string; className?: string; children: React.ReactNode };

// Pages use client-side navigation; files (the resume PDF) download directly
export default function NavLink({ href, download, className, children }: Props) {
  return download ? (
    <a href={href} download={download} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
