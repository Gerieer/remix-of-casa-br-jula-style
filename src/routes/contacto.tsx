import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Casa Brújula" },
      {
        name: "description",
        content:
          "Escríbenos para sugerir una marca, proponer una pieza para el catálogo o resolver dudas sobre Casa Brújula.",
      },
      { property: "og:title", content: "Contacto — Casa Brújula" },
      {
        property: "og:description",
        content: "Sugiere marcas, propone piezas o escríbenos tus dudas.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        description="¿Una marca que deberíamos seguir, un disco que merece estar aquí? Cuéntanos."
      />
      <section className="mx-auto max-w-xl px-5 py-14">
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Mensaje registrado", {
              description: "Gracias por escribir a Casa Brújula.",
            });
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" name="nombre" required placeholder="Tu nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo</Label>
            <Input id="email" name="email" type="email" required placeholder="tu@correo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea id="mensaje" name="mensaje" required rows={6} placeholder="Escribe aquí…" />
          </div>
          <Button
            type="submit"
            className="w-full bg-cta text-cta-foreground hover:bg-cta-hover"
          >
            Enviar mensaje
          </Button>
          {sent ? (
            <p className="text-center text-xs text-muted-foreground">
              Este formulario es demostrativo y aún no envía correos.
            </p>
          ) : null}
        </form>
      </section>
    </>
  );
}
