import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ALL_WATCH_BRANDS, WATCHES } from "@/data/catalog";

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas de relojería — Casa Brújula" },
      {
        name: "description",
        content:
          "Las 39 marcas de relojería que seguimos en Casa Brújula: Seiko, Citizen, Hamilton, Laco, San Martin, Vostok y muchas más.",
      },
      { property: "og:title", content: "Marcas de relojería — Casa Brújula" },
      {
        property: "og:description",
        content: "Directorio de las marcas de relojería curadas por Casa Brújula.",
      },
    ],
  }),
  component: MarcasPage,
});

function MarcasPage() {
  const conProducto = new Set(WATCHES.map((w) => w.marca));

  return (
    <>
      <PageHero
        eyebrow="Directorio"
        title="Marcas que seguimos"
        description={`${ALL_WATCH_BRANDS.length} casas relojeras dentro de nuestro radar editorial. Las marcadas ya tienen piezas en el catálogo.`}
      />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ALL_WATCH_BRANDS.map((brand) => (
            <li
              key={brand}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-colors hover:border-copper/50"
            >
              <span className="font-serif-display text-lg">{brand}</span>
              {conProducto.has(brand) ? (
                <span className="rounded-full bg-copper/10 px-2.5 py-0.5 text-[11px] text-copper">
                  En catálogo
                </span>
              ) : (
                <span className="text-[11px] text-muted-foreground">Próximamente</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
