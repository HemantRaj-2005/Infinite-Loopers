import GooeyNav from "@/components/bits-components/GooeyNav/GooeyNav";
import MobileNavbar from "./MobileNavbar";


const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Suggestion Box", href: "#" },
  { label: "Event Tracker", href: "#" },
  { label: "Dashboard", href: "#" },
];

function Navbar() {
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

