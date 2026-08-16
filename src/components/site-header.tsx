import { Link } from "@tanstack/react-router";
import { Compass, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Catálogo" },
  { to: "/marcas", label: "Marcas" },
  { to: "/afiliados", label: "Aviso de afiliados" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/60 bg-navy/95 text-navy-foreground backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-11 items-center justify-center rounded-full bg-cream/10 text-gold ring-1 ring-gold/40">
            <Compass className="size-6" strokeWidth={1.4} />
          </span>
          <span className="leading-tight">
            <span className="block font-serif-display text-2xl font-semibold tracking-tight">
              Casa Brújula
            </span>
            <span className="eyebrow block text-gold">Curaduría de estilo</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-navy-foreground/70 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-navy-foreground/25 md:hidden"
        >
          <Menu className="size-5" />
        </button>
      </div>

      <div className={cn("border-t border-navy-foreground/15 md:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-navy-foreground/75"
              activeProps={{ className: "text-gold font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
