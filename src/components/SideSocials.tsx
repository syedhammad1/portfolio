import Logo from "./Logo";
import { socialLinks } from "./socials";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";

export default function SideSocials() {
  return (
    <div>
      <div className="w-32">
        <Logo />
        <div className="md:mt-64">
          {socialLinks.map(({ href, Icon }, i) => (
            <div key={href} className={`md:h-6 md:w-6 hidden md:block ${i ? "md:mt-5" : ""}`}>
              <a href={href} target="_blank" rel="noreferrer">
                <Icon className="text-2xl" />
              </a>
            </div>
          ))}
          <div className="mt-6 hidden md:block">
            <a
              href={`https://wa.me/${site.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Message ${site.phone} on WhatsApp`}
              className="inline-flex items-center gap-2 whitespace-nowrap text-kjColorGray transition-colors hover:text-kjColorPrime dark:text-kjColorLight"
            >
              <FaWhatsapp className="shrink-0 text-2xl text-[#25D366]" />
              <span className="text-xs font-medium"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
