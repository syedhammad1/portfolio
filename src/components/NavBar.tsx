"use client";

import NavLink from "./NavLink";
import { FaEnvelope, FaBars } from "react-icons/fa";
import { navLinks } from "./navLinks";
import ThemeToggle from "./ThemeToggle";
import SideBar from "./SideBar";
import { useNav } from "./NavContext";
import { site } from "@/data/site";


export default function NavBar() {
  const { toggle } = useNav();
  return (
    <nav>
      <div className="hidden md:flex">
        <div className="text-kjColorGray dark:text-kjColorLight text-sm md:flex-1">
          <div className="font-bold md:ml-4 inline-block py-1 px-2 f-link">
            <a href={`mailto:${site.email}`} className="inline-flex items-center">
              <FaEnvelope className="text-lg mr-2" />
              {site.email}
            </a>
          </div>
          <ThemeToggle />
        </div>
        <div>
          {navLinks.map(({ href, label, Icon }) => (
            <NavLink key={href} href={href}>
              <button className="focus:outline-none py-1 px-2 capitalize f-link">
                <Icon className="text-lg mr-2 inline-block align-[-0.2em]" />
                {label}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
      <span className="absolute left-0 top-0 ml-24 mt-3 md:hidden">
        <ThemeToggle />
      </span>
      <SideBar />
      <div>
        <FaBars
          className="text-3xl mt-1 mr-2 absolute right-0 top-0 md:hidden cursor-pointer"
          onClick={toggle}
          aria-label="Open menu"
        />
      </div>
    </nav>
  );
}
