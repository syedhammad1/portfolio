"use client";

import NavLink from "./NavLink";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "./socials";
import { useNav } from "./NavContext";
import { navLinks } from "./navLinks";
import { site } from "@/data/site";

export default function SideBar() {
  const { isOpen, close } = useNav();
  const order = [navLinks[1], navLinks[0], navLinks[2]]; // resume, works, shelf
  return (
    <div className="md:hidden">
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/50 z-40" onClick={close} />
      )}
      <div
        data-open={isOpen}
        className={`sidebar overflow-y-auto bg-kjColorLight dark:bg-kjColorBlack ${isOpen ? "shadow-2xl" : "invisible"} fixed left-0 top-0 h-full z-50 w-2/3`}
      >
        <div className="h-full pt-10 px-5 relative">
          <div onClick={close}>
            <a href={`mailto:${site.email}`}>
              <div className="mt-3 flex items-center">
                <FaEnvelope className="text-lg" />
                <span className="ml-4 capitalize">Email</span>
              </div>
            </a>
            <a href={`https://wa.me/${site.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
              <div className="mt-3 flex items-center">
                <FaWhatsapp className="text-lg text-[#25D366]" />
                <span className="ml-4">{site.phone}</span>
              </div>
            </a>
            {order.map(({ href, label, Icon, download }) => (
              <NavLink key={href} href={href} download={download}>
                <div className="mt-3 flex items-center">
                  <Icon className="text-lg" />
                  <span className="ml-4 capitalize">{label}</span>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="absolute bottom-0 mb-3 flex gap-3">
            {socialLinks.map(({ key, href, Icon }) => (
              <a key={key} href={href} target="_blank" rel="noreferrer">
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
