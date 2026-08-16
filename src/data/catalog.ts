export type Region = "mx" | "com" | "es";

export const REGIONS: { id: Region; label: string; domain: string; currency: string }[] = [
  { id: "mx", label: "México", domain: "amazon.com.mx", currency: "MXN" },
  { id: "com", label: "Internacional", domain: "amazon.com", currency: "MXN" },
  { id: "es", label: "España", domain: "amazon.es", currency: "MXN" },
];

export const AFFILIATE_TAG = "casabrujula-20";

export function amazonUrl(asin: string, region: Region) {
  const domain = REGIONS.find((r) => r.id === region)?.domain ?? "amazon.com.mx";
  return `https://www.${domain}/dp/${asin}?tag=${AFFILIATE_TAG}&linkCode=ssc`;
}

export type Movimiento = "Automático" | "Cuarzo" | "Manual";

export type Watch = {
  id: string;
  asin: string;
  marca: string;
  nombre: string;
  precio: number;
  movimiento: Movimiento;
  resistenteAgua: boolean;
};

export type Formato = "Vinilo" | "CD";
export type Genero =
  | "Rock"
  | "Jazz"
  | "Electrónica"
  | "Pop"
  | "Clásica"
  | "Hip-Hop"
  | "Folk"
  | "Blues";

export type Music = {
  id: string;
  asin: string;
  artista: string;
  album: string;
  formato: Formato;
  genero: Genero;
  precio: number;
  audiofila: boolean;
};

export const WATCH_BRANDS_WITH_PRODUCTS = [
  "Timex",
  "Citizen",
  "Casio",
  "Seiko",
  "Vostok",
  "Orient",
  "Sugess",
  "Victorinox",
  "AVI-8",
  "Hamilton",
  "Sea-Gull",
  "Zeppelin",
  "Laco",
  "San Martin",
  "Certina",
  "Bulova",
  "CIGA Design",
  "Swatch",
];

export const WATCH_BRANDS_EXTRA = [
  "Addies Dive",
  "Berny",
  "Luminox",
  "Spinnaker",
  "Pagani Design",
  "Boderry",
  "Watchdives",
  "Thorn",
  "Duxot",
  "Lorus",
  "1963 Watch",
  "Movado",
  "Agelocer",
  "Praesidus",
  "Ratio",
  "Frederique Constant",
  "About Vintage",
  "Tactical Frog",
  "Infantry",
  "SPECHT&SÖHNE",
  "SEAKOSS",
];

export const ALL_WATCH_BRANDS = [...WATCH_BRANDS_WITH_PRODUCTS, ...WATCH_BRANDS_EXTRA].sort(
  (a, b) => a.localeCompare(b, "es"),
);

export const WATCHES: Watch[] = [
  { id: "w1", asin: "B01N4XQ1LK", marca: "Timex", nombre: "Expedition Field 40 mm", precio: 2190, movimiento: "Cuarzo", resistenteAgua: true },
  { id: "w2", asin: "B07XJ8C8F5", marca: "Citizen", nombre: "Eco-Drive Corso Acero", precio: 6480, movimiento: "Cuarzo", resistenteAgua: true },
  { id: "w3", asin: "B000GAYQL0", marca: "Casio", nombre: "Vintage A168 Dorado", precio: 1150, movimiento: "Cuarzo", resistenteAgua: false },
  { id: "w4", asin: "B071VF4Q4T", marca: "Seiko", nombre: "5 Sports Field SRPG Automático", precio: 5990, movimiento: "Automático", resistenteAgua: true },
  { id: "w5", asin: "B07T1KM2QW", marca: "Vostok", nombre: "Amphibia 710 Scuba Dude", precio: 3480, movimiento: "Automático", resistenteAgua: true },
  { id: "w6", asin: "B00R9BLZ8A", marca: "Orient", nombre: "Bambino Versión 2 Crema", precio: 4290, movimiento: "Automático", resistenteAgua: false },
  { id: "w7", asin: "B08QRJ2Z1P", marca: "Sugess", nombre: "Cronógrafo Panda Seagull ST19", precio: 7850, movimiento: "Manual", resistenteAgua: false },
  { id: "w8", asin: "B00KG2R8QK", marca: "Victorinox", nombre: "I.N.O.X. Paracord 43 mm", precio: 12900, movimiento: "Cuarzo", resistenteAgua: true },
  { id: "w9", asin: "B07PFPS9J1", marca: "AVI-8", nombre: "Hawker Hurricane Cronógrafo", precio: 6350, movimiento: "Cuarzo", resistenteAgua: true },
  { id: "w10", asin: "B00J7QW1LW", marca: "Hamilton", nombre: "Khaki Field Mechanical 38 mm", precio: 12400, movimiento: "Manual", resistenteAgua: true },
  { id: "w11", asin: "B08L5N7XJ2", marca: "Sea-Gull", nombre: "1963 Reedición Acrílico 38 mm", precio: 6890, movimiento: "Manual", resistenteAgua: false },
  { id: "w12", asin: "B00J3EUJ3G", marca: "Zeppelin", nombre: "LZ120 Rome Lady Cuero", precio: 8250, movimiento: "Cuarzo", resistenteAgua: false },
  { id: "w13", asin: "B07QN3M5PF", marca: "Laco", nombre: "Aachen 39 Piloto Tipo B", precio: 9950, movimiento: "Automático", resistenteAgua: true },
  { id: "w14", asin: "B09TPX2HRD", marca: "San Martin", nombre: "SN0116 Diver 200 m", precio: 8990, movimiento: "Automático", resistenteAgua: true },
  { id: "w15", asin: "B07D7C5V6J", marca: "Certina", nombre: "DS Action Diver Powermatic 80", precio: 15600, movimiento: "Automático", resistenteAgua: true },
  { id: "w16", asin: "B01N9V7F1B", marca: "Bulova", nombre: "Lunar Pilot Cronógrafo 43 mm", precio: 11400, movimiento: "Cuarzo", resistenteAgua: true },
  { id: "w17", asin: "B09H2PJ9YQ", marca: "CIGA Design", nombre: "Serie U Blue Planet Titanio", precio: 13800, movimiento: "Automático", resistenteAgua: true },
  { id: "w18", asin: "B08F7QK6MC", marca: "Swatch", nombre: "Sistem51 Irony Automático", precio: 4650, movimiento: "Automático", resistenteAgua: true },
];

export const GENEROS: Genero[] = [
  "Rock",
  "Jazz",
  "Electrónica",
  "Pop",
  "Clásica",
  "Hip-Hop",
  "Folk",
  "Blues",
];

export const MUSIC: Music[] = [
  { id: "m1", asin: "B0CM1AA101", artista: "Trío Andino", album: "Horizonte Nocturno", formato: "Vinilo", genero: "Folk", precio: 1290, audiofila: true },
  { id: "m2", asin: "B0CM1AA102", artista: "Los Faros de Sal", album: "Marea Alta", formato: "Vinilo", genero: "Rock", precio: 1150, audiofila: false },
  { id: "m3", asin: "B0CM1AA103", artista: "Cuarteto Meridiano", album: "Suite del Puerto", formato: "CD", genero: "Jazz", precio: 420, audiofila: false },
  { id: "m4", asin: "B0CM1AA104", artista: "Nébula Circuito", album: "Frecuencia Violeta", formato: "Vinilo", genero: "Electrónica", precio: 1390, audiofila: true },
  { id: "m5", asin: "B0CM1AA105", artista: "Camila Duarte", album: "Cartas de Verano", formato: "CD", genero: "Pop", precio: 380, audiofila: false },
  { id: "m6", asin: "B0CM1AA106", artista: "Orquesta del Valle Nuevo", album: "Preludios de Invierno", formato: "Vinilo", genero: "Clásica", precio: 1650, audiofila: true },
  { id: "m7", asin: "B0CM1AA107", artista: "Barrio Séptimo", album: "Cuadernos de Asfalto", formato: "CD", genero: "Hip-Hop", precio: 350, audiofila: false },
  { id: "m8", asin: "B0CM1AA108", artista: "Delta Ceniza", album: "Río Que No Vuelve", formato: "Vinilo", genero: "Blues", precio: 1240, audiofila: false },
  { id: "m9", asin: "B0CM1AA109", artista: "Bruma Eléctrica", album: "Aurora Baja", formato: "Vinilo", genero: "Electrónica", precio: 1490, audiofila: true },
  { id: "m10", asin: "B0CM1AA110", artista: "Hermanos Sotavento", album: "Camino de Piedra", formato: "CD", genero: "Folk", precio: 340, audiofila: false },
  { id: "m11", asin: "B0CM1AA111", artista: "Sofía Marlén", album: "Vidrio y Neón", formato: "Vinilo", genero: "Pop", precio: 1190, audiofila: false },
  { id: "m12", asin: "B0CM1AA112", artista: "Quinteto Bahía Norte", album: "Sesiones de Medianoche", formato: "Vinilo", genero: "Jazz", precio: 1580, audiofila: true },
  { id: "m13", asin: "B0CM1AA113", artista: "Motor Púrpura", album: "Ruido Doméstico", formato: "CD", genero: "Rock", precio: 395, audiofila: false },
  { id: "m14", asin: "B0CM1AA114", artista: "Ensamble Cordillera", album: "Nocturnos para Cuerdas", formato: "CD", genero: "Clásica", precio: 460, audiofila: false },
  { id: "m15", asin: "B0CM1AA115", artista: "Colectivo Norte 12", album: "Códigos Postales", formato: "Vinilo", genero: "Hip-Hop", precio: 1320, audiofila: true },
];

export type TipoAccesorio =
  | "Fragancias"
  | "Ropa"
  | "Gafas"
  | "Calzado"
  | "Navajas"
  | "Plumas"
  | "Estuches"
  | "Correas"
  | "Carga";

export const TIPOS_ACCESORIO: TipoAccesorio[] = [
  "Fragancias",
  "Ropa",
  "Gafas",
  "Calzado",
  "Navajas",
  "Plumas",
  "Estuches",
  "Correas",
  "Carga",
];

export type RangoPrecio = "todos" | "lt500" | "500-1500" | "1500-3000" | "gt3000";

export const RANGOS_PRECIO: { id: RangoPrecio; label: string; min: number; max: number }[] = [
  { id: "todos", label: "Todos los precios", min: 0, max: Infinity },
  { id: "lt500", label: "Menos de $500", min: 0, max: 500 },
  { id: "500-1500", label: "$500 – $1,500", min: 500, max: 1500 },
  { id: "1500-3000", label: "$1,500 – $3,000", min: 1500, max: 3000 },
  { id: "gt3000", label: "Más de $3,000", min: 3000, max: Infinity },
];

export type Accessory = {
  id: string;
  asin: string;
  tipo: TipoAccesorio;
  nombre: string;
  descriptor: string;
  precio: number;
  etiqueta?: string;
};

export const ACCESSORIES: Accessory[] = [
  { id: "a1", asin: "B0CA1AB101", tipo: "Fragancias", nombre: "Eau de Parfum Ámbar y Cedro 100 ml", descriptor: "Fragancia amaderada", precio: 1290, etiqueta: "Edición limitada" },
  { id: "a2", asin: "B0CA1AB102", tipo: "Fragancias", nombre: "Agua de Colonia Cítrica Neroli 50 ml", descriptor: "Fragancia fresca", precio: 480 },
  { id: "a3", asin: "B0CA1AB103", tipo: "Ropa", nombre: "Chaqueta Harrington Algodón Encerado", descriptor: "Prenda exterior", precio: 2450, etiqueta: "Envío rápido" },
  { id: "a4", asin: "B0CA1AB104", tipo: "Ropa", nombre: "Suéter Merino Cuello Redondo", descriptor: "Punto fino", precio: 1390 },
  { id: "a5", asin: "B0CA1AB105", tipo: "Gafas", nombre: "Gafas de Sol Panto Acetato Tortuga", descriptor: "Lente polarizada", precio: 1650 },
  { id: "a6", asin: "B0CA1AB106", tipo: "Gafas", nombre: "Gafas Aviador Metal Dorado", descriptor: "Lente verde G15", precio: 890, etiqueta: "Envío rápido" },
  { id: "a7", asin: "B0CA1AB107", tipo: "Calzado", nombre: "Botín Chelsea Piel Engrasada", descriptor: "Suela de goma", precio: 3450, etiqueta: "Edición limitada" },
  { id: "a8", asin: "B0CA1AB108", tipo: "Calzado", nombre: "Tenis Minimalista Piel Blanca", descriptor: "Hecho a mano", precio: 2180 },
  { id: "a9", asin: "B0CA1AB109", tipo: "Navajas", nombre: "Navaja Plegable Acero D2 Mango Micarta", descriptor: "Filo liso 8.5 cm", precio: 1480 },
  { id: "a10", asin: "B0CA1AB110", tipo: "Navajas", nombre: "Navaja Multiusos 12 Funciones", descriptor: "Acero inoxidable", precio: 620 },
  { id: "a11", asin: "B0CA1AB111", tipo: "Plumas", nombre: "Pluma Fuente Resina Negra Punto F", descriptor: "Convertidor incluido", precio: 1750, etiqueta: "Edición limitada" },
  { id: "a12", asin: "B0CA1AB112", tipo: "Plumas", nombre: "Bolígrafo Latón Macizo Recargable", descriptor: "Pátina natural", precio: 390 },
  { id: "a13", asin: "B0CA1AB113", tipo: "Estuches", nombre: "Estuche Viajero para Dos Relojes", descriptor: "Piel y gamuza", precio: 1180 },
  { id: "a14", asin: "B0CA1AB114", tipo: "Correas", nombre: "Correa NATO Nylon Balístico 20 mm", descriptor: "Herrajes cepillados", precio: 320 },
  { id: "a15", asin: "B0CA1AB115", tipo: "Correas", nombre: "Correa Piel Curtida Vegetal 22 mm", descriptor: "Costura a mano", precio: 690 },
  { id: "a16", asin: "B0CA1AB116", tipo: "Carga", nombre: "Power Bank 20,000 mAh Carga Rápida", descriptor: "USB-C 65 W", precio: 1090, etiqueta: "Envío rápido" },
  { id: "a17", asin: "B0CA1AB117", tipo: "Carga", nombre: "Cargador GaN 100 W Cuatro Puertos", descriptor: "Compacto de viaje", precio: 3250 },
];

export const formatMXN = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
