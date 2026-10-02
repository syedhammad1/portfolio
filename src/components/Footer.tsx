import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="md:max-w-6xl md:m-auto p-2 md:p-8 text-kjColorGray dark:text-kjColorLight">
      <footer className="mt-10 md:flex">
        <div className="uppercase text-xs md:w-1/4 text-center mb-3 md:mb-0 md:text-left">
          <Logo />
        </div>
        <div className="text-center md:w-2/4 mb-3 md:mb-0">
          <ul>
            {navLinks.map(({ href, label, download }) => (
              <NavLink key={href} href={href} download={download}>
                <li className="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">{label}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="uppercase text-center text-xs md:w-1/4">
          <p className="py-1 px-2">© {new Date().getFullYear()} ken. all rights reserved</p>
        </div>
      </footer>
      <div className="h-3 mt-5 flex">
        <div className="h-full w-1/4 bg-kjColorPrime" />
        <div className="h-full w-1/4 bg-kjColorGold" />
        <div className="h-full w-1/4 bg-kjColorPrimeLight" />
        <div className="h-full w-1/4 bg-kjColorSecondary" />
      </div>
    </div>
  );
}
