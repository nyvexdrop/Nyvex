// ==========================================
// NYVEX DROP - Tienda por WhatsApp
// ==========================================

// ⚠️ PON AQUÍ TU NÚMERO REAL (con lada de México, sin + ni espacios)
// Ejemplo para Guadalajara: 3312345678 → 523312345678
const WHATSAPP_NUMERO = "525534897969";

// Tenis: aún no disponibles, se muestran como "Próximamente"
const TENIS_PROXIMAMENTE = [
  { nombre: "Tenis Urbanos", emoji: "👟" },
  { nombre: "Tenis Deportivos", emoji: "👟" },
  { nombre: "Tenis Retro", emoji: "👟" },
];

const SECCIONES = [
  { cat: "sudaderas", titulo: "Sudaderas", emoji: "🧥" },
  { cat: "audifonos", titulo: "Audífonos", emoji: "🎧" },
  { cat: "accesorios", titulo: "Accesorios", emoji: "🔌" },
  { cat: "celulares", titulo: "Celulares", emoji: "📱" },
  { cat: "perfumes", titulo: "Perfumes", emoji: "🧴" },
  { cat: "tenis", titulo: "Tenis", emoji: "👟" },
];

function precio(n) {
  return "$" + Number(n).toLocaleString("es-MX");
}

// --- Menú móvil ---
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("abierto");
  });
});

// --- Catálogo ---
// Los productos se editan en productos.json (agrega, quita o cambia precios).
// Si abres index.html directo (sin Live Server) usa la lista de respaldo,
// que es la misma que productos.json, para que siempre se vean todos.
const productosRespaldo = [
  {
    nombre: "Camiseta Flow para Hombre",
    precio: 199.99,
    categoria: "sudaderas",
    emoji: "🧥",
    imagen: "img/sudaderaporshe.png",
    descripcion:
      "Nueva Camiseta Flow para Hombre. Sudadera estampada diaria con diseños de coches deportivos, coches de lujo y coches de carreras. Tejido suave y confortable, bolsillo delantero. Color: Negro. Tallas: S, M, L, XL. Envío local. Ideal para regalo en Pascua, Halloween, Acción de Gracias y Navidad."
  },
  {
    nombre: "Capucha Dragón para Hombre",
    precio: 199.99,
    categoria: "sudaderas",
    emoji: "🧥",
    imagen: "img/sudaderadragon.png",
    descripcion:
      "Capucha para hombre con estampado de dragón, cordón ajustable y bolsillo canguro. Ajuste cómodo, estilo casual ideal para otoño e invierno. Color: Negro. Talla: Estándar MX. Envío local."
  },
  {
    nombre: "Sudadera Gringa para Hombre",
    precio: 199.99,
    categoria: "sudaderas",
    emoji: "🧥",
    imagen: "img/sudaderagriega.png",
    descripcion:
      "Casual para hombres, estilo con estampado motivacional en inglés. Ligera, elástica, tejido de poliéster, ajuste regular. Sudadera con capucha. Color: Negro. Tallas: S, M, L, XL. Envío local."
  },
  {
    nombre: "Sudadera Katana Japonesa para Hombre",
    precio: 199.99,
    categoria: "sudaderas",
    emoji: "🧥",
    imagen: "img/sudaderakatana.png",
    descripcion:
      "Sudadera con capucha negra para hombre, con estampado gráfico único de katana y flor de cerezo rosa con caracteres japoneses. Cómoda, disponible en varias tallas. Perfecta para actividades al aire libre y uso diario casual. Color: Negro. Tallas: S, M, L, XL. Envío local."
  },
  {
    nombre: "Auriculares Inalámbricos Pro",
    precio: 139.99,
    categoria: "audifonos",
    emoji: "🎧",
    imagen: "img/airpodspro.png",
    descripcion:
      "Auriculares inalámbricos Bluetooth de alta calidad. Sonido lossless, llamadas claras, hasta 24h de música, chip Bluetooth 5.3 mejorado (+80% calidad de sonido). Compatibles con todas las marcas de celulares. Almacén local, sin impuestos de importación. Color: Blanco. Envío local. Sin cancelación de ruido (no tienen ANC)."
  },
  {
    nombre: "AirPods 2 Pro con Cancelación",
    precio: 309.99,
    categoria: "audifonos",
    emoji: "🎧",
    imagen: "img/airpodspreo2.png",
    descripcion:
      "AirPods 2 Pro con cancelación de ruido REAL. Entrada tipo C, aparece la interfaz en iOS como los originales. Carga inalámbrica, incluye cable de carga y tamaños de almohadillas. GPS (emiten sonido para rastrearlos en la app 'Encontrar' de Apple). Certificados Apple. Control táctil en cada AirPod (cambiar canción y pausa). Batería de 6-7 horas. Envío local."
  },
  {
    nombre: "AirPods Pro 3 Traducción Real",
    precio: 379.99,
    categoria: "audifonos",
    emoji: "🎧",
    imagen: "img/airpodspro3.png",
    descripcion:
      "AirPods Pro 3 con cancelación de ruido REAL, 2 veces mejor que la generación anterior. Entrada tipo C, interfaz en iOS como los originales. Carga inalámbrica. Traductor de idiomas en vivo y 100% funcional. Mide el ritmo cardiaco. GPS (emiten sonido para rastrearlos en la app 'Encontrar' de Apple). Certificados Apple. Control táctil en cada AirPod. Incluye tamaños de almohadillas. Batería de 6-7 horas. Envío local."
  },
  {
    nombre: "AirPods 4",
    precio: 359.99,
    categoria: "audifonos",
    emoji: "🎧",
    imagen: "img/airpods4.png",
    descripcion:
      "AirPods 4 con cancelación de ruido REAL. Aparece la interfaz en iOS como los originales. Entrada tipo C. GPS (emiten sonido para rastrearlos en la app 'Encontrar' de Apple). Certificados Apple. Control táctil en cada AirPod (cambiar canción y pausa). Duración de batería de 7-8 horas. Envío local."
  },
  {
    nombre: "AirPods Max",
    precio: 379.99,
    categoria: "audifonos",
    emoji: "🎧",
    imagen: "img/audifonosdiadema.png",
    descripcion:
      "AirPods Max, audífonos de diadema con cancelación de ruido REAL. Aparece la interfaz en iOS como los originales. Entrada tipo C, carga rápida. GPS (emiten sonido para rastrearlos en la app 'Encontrar' de Apple). Certificados Apple. Control táctil para cambiar canción y pausar. Cómodos para uso prolongado. Envío local."
  },
  {
    nombre: "Cable C a Lightning (1m)",
    precio: 75.99,
    categoria: "accesorios",
    emoji: "🔌",
    imagen: "img/cablec.png",
    descripcion:
      "Cable de carga USB-C a Lightning de 1 metro. Compatible con iPhone, iPad, AirPods y otros dispositivos Apple. Carga rápida y transferencia de datos. Envío local."
  },
  {
    nombre: "Batería MagSafe 5000 mAh",
    precio: 199.99,
    categoria: "accesorios",
    emoji: "🔋",
    imagen: "img/bateria5000.png",
    descripcion:
      "Batería portátil MagSafe de 5000 mAh. Carga inalámbrica por imanes, compatible con iPhone y AirPods. Compacta, ligera y con entrada USB-C. Ideal para llevar energía extra a donde vayas. Envío local."
  },
  {
    nombre: "Batería MagSafe 10,000 mAh",
    precio: 249.99,
    categoria: "accesorios",
    emoji: "🔋",
    imagen: "img/bateria10000.png",
    descripcion:
      "Batería portátil MagSafe de 10,000 mAh. Carga inalámbrica por imanes, compatible con iPhone y AirPods. Mayor capacidad para varios ciclos de carga, con entrada USB-C. Perfecta para viajes y uso intenso. Envío local."
  },
  {
    nombre: "iPhone 14",
    precio: 6399.99,
    categoria: "celulares",
    emoji: "📱",
    imagen: "img/iphone4.png",
    descripcion:
      "iPhone 14 de 128 GB con eSIM AT&T. Estética 10/10, sin piezas cambiadas. Batería al 98% de capacidad. Envío local."
  },
  {
    nombre: "Rasasi Hawas Ice for Him",
    precio: 1199.99,
    categoria: "perfumes",
    emoji: "🧴",
    imagen: "img/RasasiHawasIce forHim.png",
    descripcion:
      "Perfume masculino con aroma fresco, dulce y elegante, perfecto para destacar en cualquier ocasión. Hawas Ice combina una sensación refrescante con un toque moderno y juvenil. Aroma acuático, ideal para días calurosos, citas, fiestas y uso diario. Estilo juvenil, limpio y llamativo. Presentación elegante, perfecta para colección o regalo. Envío local."
  },
];

let productos = productosRespaldo;

async function cargarProductos() {
  try {
    const res = await fetch("productos.json");
    if (!res.ok) throw new Error("No se pudo cargar");
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      productos = data;
    }
  } catch (error) {
    // Se mantiene la lista de respaldo
  }
  renderProductos();
}

const grid = document.getElementById("productosGrid");

function renderProducto(p) {
  if (p.proximamente) {
    return `
      <article class="producto producto-proximamente">
        <div class="producto-img">
          <span class="producto-img-emoji">${p.emoji || "👟"}</span>
        </div>
        <div class="producto-info">
          <p class="producto-nombre">${p.nombre}</p>
          <span class="producto-badge-prox">⏳ PRÓXIMAMENTE</span>
        </div>
      </article>`;
  }

  const imgHtml = p.imagen
    ? `<img src="${p.imagen}" alt="${p.nombre}" class="producto-img-real">`
    : `<span class="producto-img-emoji">${p.emoji || "🛍️"}</span>`;
  const descHtml = p.descripcion
    ? `<p class="producto-descripcion">${p.descripcion}</p>`
    : "";

  return `
    <article class="producto">
      <div class="producto-img">${imgHtml}</div>
      <div class="producto-info">
        <p class="producto-nombre">${p.nombre}</p>
        ${descHtml}
        <p class="producto-precio">${precio(p.precio)}</p>
        <button class="producto-boton" data-nombre="${p.nombre}" data-precio="${p.precio}">
          💬 Comprar por WhatsApp
        </button>
      </div>
    </article>`;
}

function renderSeccion(seccion, lista, i) {
  const divisor = i === 0 ? "" : `<div class="seccion-divisor"></div>`;
  return `
    ${divisor}
    <div class="seccion-prod">
      <h3 class="seccion-prod-titulo">${seccion.emoji} ${seccion.titulo}</h3>
      <div class="productos-grid">
        ${lista.map((p) => renderProducto(p)).join("")}
      </div>
    </div>`;
}

function renderProductos() {
  let html = "";
  let i = 0;
  SECCIONES.forEach((seccion) => {
    const lista =
      seccion.cat === "tenis"
        ? TENIS_PROXIMAMENTE.map((t) => ({ ...t, proximamente: true }))
        : productos.filter((p) => p.categoria === seccion.cat);
    if (!lista.length) return;
    html += renderSeccion(seccion, lista, i);
    i++;
  });
  grid.innerHTML = html;
}

// --- Botón de compra → abre WhatsApp con el mensaje listo ---
document.addEventListener("click", (e) => {
  const boton = e.target.closest(".producto-boton");
  if (!boton) return;

  const nombre = boton.dataset.nombre;
  const precio = boton.dataset.precio;
  const mensaje = `Hola Nyvex Drop 👋 Me interesa este producto: *${nombre}* por $${precio}. ¿Está disponible? ¿Cuánto cuesta el envío a mi zona?`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );
});

cargarProductos();
