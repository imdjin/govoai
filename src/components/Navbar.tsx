import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import QrModal from "./QrModal";

const links = [
  { label: "核心能力", href: "#capabilities" },
  { label: "价值优势", href: "#values" },
  { label: "标杆案例", href: "#cases" },
  { label: "版本定价", href: "#pricing" },
  { label: "安全保障", href: "#security" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gov-dark/80 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-xl font-black text-primary-foreground tracking-wide">
          <img src={logo} alt="秒懂政务" className="h-8 w-8 object-contain" />
          秒懂政务
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setShowQr(true)}
            className="text-sm font-semibold px-5 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-all cursor-pointer"
          >
            联系我们
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gov-dark/95 backdrop-blur-md border-t border-primary-foreground/5 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-primary-foreground/70 hover:text-primary-foreground border-b border-primary-foreground/5"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); setShowQr(!showQr); }}
            className="mt-3 w-full text-center text-sm font-semibold text-accent-foreground px-5 py-2.5 rounded-lg cursor-pointer"
            style={{ background: 'var(--gradient-accent)' }}
          >
            联系我们
          </button>
        </div>
      )}
      <QrModal open={showQr} onClose={() => setShowQr(false)} />
    </nav>
  );
};

export default Navbar;