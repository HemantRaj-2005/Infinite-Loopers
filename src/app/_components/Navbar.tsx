"use client";
import GooeyNav from "@/components/bits-components/GooeyNav/GooeyNav";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
  { label: "Suggestion Box", href: "/suggestion-box" },
  { label: "Event Tracker", href: "/event-tracker" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Dashboard", href: "/dashboard" },
];

function Navbar() {
  const pathname = usePathname();
  
  // Find the index of the current route in the items array
  const activeIndex = items.findIndex(item => item.href === pathname);
  
  return (
    <div style={{ height: '4rem', position: 'relative' }} className="flex justify-between items-center px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <GooeyNav
          items={items}
          animationTime={600}
          particleCount={15}
          particleDistances={[20, 42]}
          particleR={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
          initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
        />
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}

export default Navbar;

