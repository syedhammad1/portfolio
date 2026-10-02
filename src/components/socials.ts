import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";
import { site } from "@/data/site";

// Add a network to site.socials (and an icon here) and it shows up everywhere
const icons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaTwitter,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export const socialLinks = Object.entries(site.socials as Partial<Record<keyof typeof icons, string>>)
  .filter(([key, href]) => href && key in icons)
  .map(([key, href]) => ({ key, href: href!, Icon: icons[key as keyof typeof icons] }));
