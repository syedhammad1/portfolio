import Link from "next/link";

// "SYED" wordmark in the original logo's style: angular strokes, red bar "E".
// Dark strokes use currentColor so the logo follows light/dark mode.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 112 52" className={className} role="img" aria-label="Syed Hammad">
      <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
        {/* S */}
        <polyline points="22,6 6,6 6,19 22,19 22,32 6,32" />
        {/* Y */}
        <polyline points="31,6 40,19 49,6" />
        <line x1="40" y1="19" x2="40" y2="32" />
        {/* D */}
        <polygon points="84,6 84,32 95,32 103,24 103,14 95,6" />
      </g>
      {/* E — three red bars */}
      <g fill="#e45447">
        <rect x="57" y="4" width="18" height="4.5" />
        <rect x="57" y="16.75" width="14" height="4.5" />
        <rect x="57" y="29.5" width="18" height="4.5" />
      </g>
      <text
        x="55"
        y="49"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="5.2"
        style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
      >
        HAMMAD
      </text>
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="inline-block pb-2 text-kjColorDark dark:text-kjColorLight">
      <LogoMark className="h-11 w-auto" />
    </Link>
  );
}
