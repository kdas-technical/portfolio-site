import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../data/PortfolioData";

const Navbar = () => {
  const [open, setOpen]=useState(false)
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-bold">
          {portfolioData.logoName}
        </a>

        <div className="hidden gap-6 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="hover:underline"
            >
              {name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t bg-white px-5 py-5 md:hidden">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar