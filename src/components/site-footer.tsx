import { Link } from "@tanstack/react-router";
import { Compass } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Compass className="size-6 text-gold" strokeWidth={1.4} />
            <span className="font-serif-display text-2xl">Casa Brújula</span>
          </div>
          <p className="eyebrow mt-2 text-gold/80">Curaduría de estilo</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            Seleccionamos relojes y música con criterio editorial. Tú decides dónde comprarlos.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/" className="hover:text-gold">Catálogo</Link></li>
            <li><Link to="/marcas" className="hover:text-gold">Marcas</Link></li>
            <li><Link to="/afiliados" className="hover:text-gold">Aviso de afiliados</Link></li>
            <li><Link to="/contacto" className="hover:text-gold">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Aviso legal</h3>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
            Casa Brújula solo recomienda y enlaza productos: no somos vendedores ni fabricantes. La
            compra, pago, envío, garantía y devoluciones corren por cuenta de Amazon y sus
            vendedores.
          </p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-navy-foreground/50">
          © {new Date().getFullYear()} Casa Brújula. Participamos en el Programa de Afiliados de
          Amazon.
        </p>
      </div>
    </footer>
  );
}
