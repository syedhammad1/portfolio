// Re-mounts on every navigation, giving each page the slide-in transition
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
