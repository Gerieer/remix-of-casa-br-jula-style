import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/afiliados")({
  head: () => ({
    meta: [
      { title: "Aviso de Afiliados de Amazon — Casa Brújula" },
      {
        name: "description",
        content:
          "Divulgación del Programa de Afiliados de Amazon: cómo funcionan los enlaces de Casa Brújula y qué significa para ti como comprador.",
      },
      { property: "og:title", content: "Aviso de Afiliados de Amazon — Casa Brújula" },
      {
        property: "og:description",
        content: "Transparencia total sobre nuestros enlaces de afiliado de Amazon.",
      },
    ],
  }),
  component: AfiliadosPage,
});

const BLOQUES = [
  {
    titulo: "Divulgación obligatoria",
    texto:
      "En calidad de Afiliado de Amazon, Casa Brújula obtiene ingresos por las compras adscritas que cumplen los requisitos aplicables. Amazon y el logotipo de Amazon son marcas registradas de Amazon.com, Inc. o sus filiales.",
  },
  {
    titulo: "Qué significa para ti",
    texto:
      "El precio que pagas es exactamente el mismo con o sin nuestros enlaces. La comisión la paga Amazon, no tú. Esa comisión es lo que nos permite mantener la curaduría sin publicidad invasiva.",
  },
  {
    titulo: "No somos vendedores",
    texto:
      "Casa Brújula solo recomienda y enlaza productos: no somos vendedores ni fabricantes. La compra, pago, envío, garantía y devoluciones corren por cuenta de Amazon y sus vendedores.",
  },
  {
    titulo: "Precios y disponibilidad",
    texto:
      "Los precios y la disponibilidad mostrados son referenciales y pueden cambiar en cualquier momento. La información válida es siempre la que aparece en la página del producto en Amazon al momento de la compra.",
  },
  {
    titulo: "Independencia editorial",
    texto:
      "Ninguna marca paga por aparecer en este catálogo. Las selecciones responden a criterios de diseño, calidad percibida y relación valor-precio.",
  },
];

function AfiliadosPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparencia"
        title="Aviso de Afiliados de Amazon"
        description="Ganamos una comisión cuando compras a través de nuestros enlaces. Aquí te explicamos exactamente cómo funciona."
      />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="space-y-8">
          {BLOQUES.map((b) => (
            <article key={b.titulo} className="border-l-2 border-copper/60 pl-6">
              <h2 className="font-serif-display text-2xl">{b.titulo}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 rounded-lg bg-secondary p-6 text-xs leading-relaxed text-muted-foreground">
          Nota: nuestra cuenta del Programa de Afiliados de Amazon se encuentra en proceso de
          aprobación. Mientras tanto, los enlaces usan un identificador de seguimiento provisional.
        </p>
      </section>
    </>
  );
}
