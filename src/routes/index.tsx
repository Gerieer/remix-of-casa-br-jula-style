import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/catalog";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Brújula — Catálogo curado de relojes y música" },
      {
        name: "description",
        content:
          "Curaduría de estilo: relojes y música en vinilo o CD, seleccionados y enlazados a Amazon. Filtra por marca, movimiento, formato y género.",
      },
      { property: "og:title", content: "Casa Brújula — Curaduría de estilo" },
      {
        property: "og:description",
        content: "Relojes y música curados, con enlaces directos a Amazon México, Internacional y España.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageHero
        eyebrow="Curaduría de estilo"
        title="Piezas con carácter, elegidas una por una"
        description="Casa Brújula es un catálogo de recomendaciones. Exploramos relojes y música, seleccionamos lo que vale la pena y te llevamos directo a Amazon para que compres donde prefieras."
      />
      <Catalog />
    </>
  );
}
