# Remix of Casa Brújula Style

Crea un sitio web de catálogo de afiliados de Amazon llamado "Casa Brújula" (tagline: "Curaduría de estilo"), inspirado en la funcionalidad de reservademarcha.mx/catalogo pero con marca propia. Debe ser un sitio full-stack en React/Tailwind/shadcn.

FUNCIONALIDAD PRINCIPAL:
- Es un sitio de afiliados de Amazon: no se vende nada directamente, cada producto tiene un botón "Ver en Amazon" que llevaría a un link de afiliado (usa un tag placeholder "casabrujula-20" en el formato https://www.amazon.com.mx/dp/{ASIN}?tag=casabrujula-20&linkCode=ssc ya que el usuario aún no tiene su cuenta de Amazon Associates aprobada).
- Selector de región/tienda arriba del catálogo: México (amazon.com.mx), Internacional (amazon.com), España (amazon.es) — solo cambia el dominio de destino del link, no hace falta lógica compleja.
- Header con logo (usa un ícono de brújula 🧭 o un ícono SVG de brújula), nombre "Casa Brújula" y tagline.
- Footer con aviso legal: "Casa Brújula solo recomienda y enlaza productos: no somos vendedores ni fabricantes. La compra, pago, envío, garantía y devoluciones corren por cuenta de Amazon y sus vendedores."
- Página/sección de "Aviso de Afiliados de Amazon" con el texto de divulgación obligatorio del programa de afiliados.
- Página de "Marcas" listando las marcas del catálogo.
- Página de "Contacto" con formulario simple (sin backend real necesario, solo UI).

DOS CATEGORÍAS DE PRODUCTO CON FILTROS PROPIOS:

1. RELOJES — catálogo con ~18 productos de muestra de estas marcas: Timex, Citizen, Casio, Seiko, Vostok, Orient, Sugess, Victorinox, AVI-8, Hamilton, Sea-Gull, Zeppelin, Laco, San Martin, Certina, Bulova, CIGA Design, Swatch (y estas otras deben aparecer en la página de Marcas aunque no tengan producto de muestra: Addies Dive, Berny, Luminox, Spinnaker, Pagani Design, Boderry, Watchdives, Thorn, Duxot, Lorus, 1963 Watch, Movado, Agelocer, Praesidus, Ratio, Frederique Constant, About Vintage, Tactical Frog, Infantry, SPECHT&SÖHNE, SEAKOSS — 39 marcas en total).
Filtros: Marca (checkboxes), Movimiento (Automático/Cuarzo/Manual, radio), Resistencia al agua (checkbox).
Cada producto: marca, nombre, precio en MXN, imagen (usa un placeholder visual con ícono de reloj ya que no hay imágenes reales todavía), movimiento, si es resistente al agua.

2. MÚSICA (categoría nueva que no tiene el sitio de referencia) — catálogo de ~15 productos de muestra entre vinilos (LP) y CDs, de varios géneros musicales (rock, jazz, electrónica, pop, clásica, hip-hop, etc.), con artistas/álbumes de ejemplo genéricos o ficticios (evita usar nombres de artistas reales con copyright para no generar contenido problemático — usa nombres de álbum/artista genéricos tipo "Horizonte Nocturno — Trío Andino" o similares).
Filtros: Formato (Vinilo/CD, radio), Género musical (checkboxes: Rock, Jazz, Electrónica, Pop, Clásica, Hip-Hop, Folk, Blues), Edición (checkbox "Solo ediciones audiófilas" — marca algunos productos de vinilo como "edición audiófila 180g").
Cada producto: artista/álbum, formato, género, precio en MXN, si es edición audiófila.

Debe haber un selector de categoría (tabs o similar) arriba del catálogo para cambiar entre "⌚ Relojes" y "🎵 Música", y los filtros deben cambiar según la categoría activa.

DISEÑO: paleta cobre/dorado, azul marino oscuro, blanco/crema — estilo editorial elegante, tipografía serif para títulos. Debe verse profesional y moderno, responsive (mobile-friendly). Grid de tarjetas de producto con hover effect sutil.

Por favor genera el proyecto completo y funcional, listo para previsualizar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/16c884ef-3b56-4bdf-9d40-0ed56b57450b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
