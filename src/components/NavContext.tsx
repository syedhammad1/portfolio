"use client";

import { createContext, useContext, useState } from "react";

const NavContext = createContext<{ isOpen: boolean; toggle: () => void; close: () => void }>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContext.Provider
      value={{ isOpen, toggle: () => setIsOpen((o) => !o), close: () => setIsOpen(false) }}
    >
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);
