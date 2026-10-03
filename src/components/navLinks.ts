import { FaFile, FaUserTie, FaBook } from "react-icons/fa";
import { site } from "@/data/site";

export const navLinks: { href: string; label: string; Icon: typeof FaFile }[] = [
  { href: "/portfolio", label: "works", Icon: FaFile },
  { href: site.resume.href, label: "resume", Icon: FaUserTie },
  { href: "/shelf", label: "shelf", Icon: FaBook },
];
