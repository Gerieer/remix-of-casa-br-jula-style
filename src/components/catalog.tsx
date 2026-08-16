import { useMemo, useState } from "react";
import { ArrowUpRight, Disc3, Droplets, ShoppingBag, Watch as WatchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ACCESSORIES,
  amazonUrl,
  formatMXN,
  GENEROS,
  MUSIC,
  RANGOS_PRECIO,
  REGIONS,
  TIPOS_ACCESORIO,
  WATCHES,
  WATCH_BRANDS_WITH_PRODUCTS,
  type Formato,
  type Genero,
  type Movimiento,
  type RangoPrecio,
  type Region,
  type TipoAccesorio,
} from "@/data/catalog";

type Category = "relojes" | "musica" | "accesorios";

function toggle<T>(list: T[], value: T) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function FilterBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-copper">{title}</h3>
      <div className="mt-3 space-y-2.5">{children}</div>
    </div>
  );
}

function ProductCard({
  kind,
  title,
  subtitle,
  price,
  tags,
  href,
  badge,
}: {
  kind: Category;
  title: string;
  subtitle: string;
  price: number;
  tags: string[];
  href: string;
  badge?: string | undefined;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-[var(--shadow-lift)]">
      <div className="relative flex aspect-4/3 items-center justify-center bg-secondary/70">
        <div className="rule-gradient absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100" />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-urgency px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-urgency-foreground">
            {badge}
          </span>
        ) : null}
        {kind === "relojes" ? (
          <WatchIcon className="size-16 text-copper/45 transition-transform duration-300 group-hover:scale-110" strokeWidth={1} />
        ) : kind === "musica" ? (
          <Disc3 className="size-16 text-copper/45 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1} />
        ) : (
          <ShoppingBag className="size-16 text-copper/45 transition-transform duration-300 group-hover:scale-110" strokeWidth={1} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-muted-foreground">{subtitle}</p>
        <h3 className="mt-1.5 font-serif-display text-xl leading-snug">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between gap-3 pt-1">
          <span className="font-serif-display text-2xl">{formatMXN(price)}</span>
        </div>
        <Button
          asChild
          size="lg"
          className="mt-4 w-full bg-cta text-cta-foreground shadow-[0_6px_18px_-8px_var(--cta)] transition-colors hover:bg-cta-hover"
        >
          <a href={href} target="_blank" rel="nofollow sponsored noopener noreferrer">
            Ver en Amazon <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}

export function Catalog() {
  const [category, setCategory] = useState<Category>("relojes");
  const [region, setRegion] = useState<Region>("mx");

  // Relojes
  const [marcas, setMarcas] = useState<string[]>([]);
  const [movimiento, setMovimiento] = useState<Movimiento | "todos">("todos");
  const [soloAgua, setSoloAgua] = useState(false);

  // Música
  const [formato, setFormato] = useState<Formato | "todos">("todos");
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [soloAudiofila, setSoloAudiofila] = useState(false);

  // Accesorios
  const [tipos, setTipos] = useState<TipoAccesorio[]>([]);
  const [rango, setRango] = useState<RangoPrecio>("todos");

  const watches = useMemo(
    () =>
      WATCHES.filter(
        (w) =>
          (marcas.length === 0 || marcas.includes(w.marca)) &&
          (movimiento === "todos" || w.movimiento === movimiento) &&
          (!soloAgua || w.resistenteAgua),
      ),
    [marcas, movimiento, soloAgua],
  );

  const music = useMemo(
    () =>
      MUSIC.filter(
        (m) =>
          (formato === "todos" || m.formato === formato) &&
          (generos.length === 0 || generos.includes(m.genero)) &&
          (!soloAudiofila || m.audiofila),
      ),
    [formato, generos, soloAudiofila],
  );

  const accessories = useMemo(() => {
    const r = RANGOS_PRECIO.find((x) => x.id === rango)!;
    return ACCESSORIES.filter(
      (a) =>
        (tipos.length === 0 || tipos.includes(a.tipo)) &&
        a.precio >= r.min &&
        a.precio < r.max,
    );
  }, [tipos, rango]);

  const count =
    category === "relojes"
      ? watches.length
      : category === "musica"
        ? music.length
        : accessories.length;

  const resetFilters = () => {
    setMarcas([]);
    setMovimiento("todos");
    setSoloAgua(false);
    setFormato("todos");
    setGeneros([]);
    setSoloAudiofila(false);
    setTipos([]);
    setRango("todos");
  };



  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-5 py-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="inline-flex flex-wrap rounded-full border border-border bg-card p-1">
          {(
            [
              { id: "relojes", label: "⌚ Relojes" },
              { id: "musica", label: "🎵 Música" },
              { id: "accesorios", label: "🛍️ Accesorios" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCategory(tab.id)}
              className={cn(
                "rounded-full px-6 py-2 text-sm transition-colors",
                category === tab.id
                  ? "bg-navy text-navy-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="eyebrow text-muted-foreground">Comprar en</span>
          <div className="inline-flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRegion(r.id)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs transition-colors",
                  region === r.id
                    ? "border-copper bg-copper/10 text-copper"
                    : "border-border text-muted-foreground hover:border-copper/50",
                )}
              >
                {r.label}
                <span className="ml-1.5 text-[10px] opacity-70">{r.domain}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-7 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-display text-2xl">Filtros</h2>
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-muted-foreground underline-offset-4 hover:text-copper hover:underline"
            >
              Limpiar
            </button>
          </div>

          {category === "relojes" ? (
            <>
              <FilterBox title="Marca">
                <div className="max-h-64 space-y-2.5 overflow-y-auto pr-1">
                  {WATCH_BRANDS_WITH_PRODUCTS.map((brand) => (
                    <div key={brand} className="flex items-center gap-2.5">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={marcas.includes(brand)}
                        onCheckedChange={() => setMarcas((m) => toggle(m, brand))}
                      />
                      <Label htmlFor={`brand-${brand}`} className="text-sm font-normal">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterBox>

              <FilterBox title="Movimiento">
                <RadioGroup
                  value={movimiento}
                  onValueChange={(v) => setMovimiento(v as Movimiento | "todos")}
                  className="gap-2.5"
                >
                  {(["todos", "Automático", "Cuarzo", "Manual"] as const).map((m) => (
                    <div key={m} className="flex items-center gap-2.5">
                      <RadioGroupItem value={m} id={`mov-${m}`} />
                      <Label htmlFor={`mov-${m}`} className="text-sm font-normal">
                        {m === "todos" ? "Todos" : m}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FilterBox>

              <FilterBox title="Resistencia al agua">
                <div className="flex items-center gap-2.5">
                  <Checkbox
                    id="agua"
                    checked={soloAgua}
                    onCheckedChange={(v) => setSoloAgua(v === true)}
                  />
                  <Label htmlFor="agua" className="text-sm font-normal">
                    Solo resistentes al agua
                  </Label>
                </div>
              </FilterBox>
            </>
          ) : category === "accesorios" ? (
            <>
              <FilterBox title="Tipo de accesorio">
                {TIPOS_ACCESORIO.map((t) => (
                  <div key={t} className="flex items-center gap-2.5">
                    <Checkbox
                      id={`tipo-${t}`}
                      checked={tipos.includes(t)}
                      onCheckedChange={() => setTipos((s) => toggle(s, t))}
                    />
                    <Label htmlFor={`tipo-${t}`} className="text-sm font-normal">
                      {t}
                    </Label>
                  </div>
                ))}
              </FilterBox>

              <FilterBox title="Rango de precio">
                <RadioGroup
                  value={rango}
                  onValueChange={(v) => setRango(v as RangoPrecio)}
                  className="gap-2.5"
                >
                  {RANGOS_PRECIO.map((r) => (
                    <div key={r.id} className="flex items-center gap-2.5">
                      <RadioGroupItem value={r.id} id={`rango-${r.id}`} />
                      <Label htmlFor={`rango-${r.id}`} className="text-sm font-normal">
                        {r.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FilterBox>
            </>
          ) : (
            <>
              <FilterBox title="Formato">
                <RadioGroup
                  value={formato}
                  onValueChange={(v) => setFormato(v as Formato | "todos")}
                  className="gap-2.5"
                >
                  {(["todos", "Vinilo", "CD"] as const).map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <RadioGroupItem value={f} id={`fmt-${f}`} />
                      <Label htmlFor={`fmt-${f}`} className="text-sm font-normal">
                        {f === "todos" ? "Todos" : f}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FilterBox>

              <FilterBox title="Género musical">
                {GENEROS.map((g) => (
                  <div key={g} className="flex items-center gap-2.5">
                    <Checkbox
                      id={`gen-${g}`}
                      checked={generos.includes(g)}
                      onCheckedChange={() => setGeneros((s) => toggle(s, g))}
                    />
                    <Label htmlFor={`gen-${g}`} className="text-sm font-normal">
                      {g}
                    </Label>
                  </div>
                ))}
              </FilterBox>

              <FilterBox title="Edición">
                <div className="flex items-center gap-2.5">
                  <Checkbox
                    id="audiofila"
                    checked={soloAudiofila}
                    onCheckedChange={(v) => setSoloAudiofila(v === true)}
                  />
                  <Label htmlFor="audiofila" className="text-sm font-normal">
                    Solo ediciones audiófilas
                  </Label>
                </div>
              </FilterBox>
            </>
          )}
        </aside>

        <div>
          <p className="mb-5 text-sm text-muted-foreground">
            {count} {count === 1 ? "pieza" : "piezas"} en la selección
          </p>

          {count === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-16 text-center">
              <Droplets className="mx-auto size-8 text-muted-foreground/50" />
              <p className="mt-3 text-sm text-muted-foreground">
                No hay resultados con estos filtros.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {category === "relojes"
                ? watches.map((w) => (
                    <ProductCard
                      key={w.id}
                      kind="relojes"
                      subtitle={w.marca}
                      title={w.nombre}
                      price={w.precio}
                      tags={[w.movimiento, w.resistenteAgua ? "Resistente al agua" : "Sin WR"]}
                      href={amazonUrl(w.asin, region)}
                    />
                  ))
                : category === "musica"
                  ? music.map((m) => (
                      <ProductCard
                        key={m.id}
                        kind="musica"
                        subtitle={m.artista}
                        title={m.album}
                        price={m.precio}
                        tags={[
                          m.formato,
                          m.genero,
                          ...(m.audiofila ? ["Edición audiófila 180g"] : []),
                        ]}
                        href={amazonUrl(m.asin, region)}
                      />
                    ))
                  : accessories.map((a) => (
                      <ProductCard
                        key={a.id}
                        kind="accesorios"
                        subtitle={a.tipo}
                        title={a.nombre}
                        price={a.precio}
                        tags={[a.descriptor]}
                        badge={a.etiqueta}
                        href={amazonUrl(a.asin, region)}
                      />
                    ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
