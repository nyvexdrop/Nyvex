// ==========================================
// NYVEX DROP - Tienda por WhatsApp
// ==========================================

// ⚠️ PON AQUÍ TU NÚMERO REAL (con lada de México, sin + ni espacios)
// Ejemplo para Guadalajara: 3312345678 → 523312345678
const WHATSAPP_NUMERO = "525534897969";

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
    nombre: "Capucha Dragón para Hombre",
    precio: 199,
    categoria: "sudaderas",
    emoji: "🧥",
    imagen: "img/sudaderadragon.png",
    descripcion:
      "Capucha para hombre con estampado de dragón, cordón ajustable y bolsillo canguro. Ajuste cómodo, estilo casual ideal para otoño e invierno. Color: Negro. Talla: Estándar MX. Envío local."
  },
  {
    nombre: "Camiseta Flow para Hombre",
    precio: 190,
    categoria: "sudaderas",
    emoji: "🧥",
    imagen: "img/sudaderaporshe.png",
    descripcion:
      "Nueva Camiseta Flow para Hombre. Sudadera estampada diaria con diseños de coches deportivos, coches de lujo y coches de carreras. Tejido suave y confortable, bolsillo delantero. Color: Negro. Tallas: S, M, L, XL. Envío local. Ideal para regalo en Pascua, Halloween, Acción de Gracias y Navidad."
  },
  { nombre: "Perfume Oud Premium", precio: 35, categoria: "perfumes", emoji: "🧴", imagen: "", descripcion: "Fragancia intensa para hombre. Larga duración." },
  { nombre: "Perfume Esencia Urbana", precio: 28, categoria: "perfumes", emoji: "🧴", imagen: "", descripcion: "Aroma fresco para uso diario." },
  { nombre: "Sudadera NYVEX Classic", precio: 45, categoria: "sudaderas", emoji: "🧥", imagen: "", descripcion: "Algodón premium, corte clásico." },
  { nombre: "Sudadera Oversize Black", precio: 50, categoria: "sudaderas", emoji: "🧥", imagen: "", descripcion: "Estilo oversize, tendencia urbana." },
  { nombre: "Audífonos Bass Boost", precio: 25, categoria: "audifonos", emoji: "🎧", imagen: "", descripcion: "Graves potentes, inalámbricos." },
  { nombre: "Audífonos Wireless Pro", precio: 40, categoria: "audifonos", emoji: "🎧", imagen: "", descripcion: "Cancelación de ruido, carga rápida." },
  { nombre: "Gorra NYVEX Snapback", precio: 15, categoria: "gorras", emoji: "🧢", imagen: "", descripcion: "Gorra ajustable con bordado NYVEX." },
  { nombre: "Gorra Trucker Edición Limitada", precio: 18, categoria: "gorras", emoji: "🧢", imagen: "", descripcion: "Edición limitada, malla transpirable." },
  { nombre: "Tenis Street Runner", precio: 75, categoria: "tenis", emoji: "👟", imagen: "", descripcion: "Cómodos y ligeros para la calle." },
  { nombre: "Tenis Urban Classic", precio: 65, categoria: "tenis", emoji: "👟", imagen: "", descripcion: "Diseño clásico que combina con todo." },
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

function renderProductos() {
  grid.innerHTML = productos
    .map((p) => {
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
          <p class="producto-precio">$${Number(p.precio).toFixed(2)}</p>
          <button class="producto-boton" data-nombre="${p.nombre}" data-precio="${p.precio}">
            💬 Comprar por WhatsApp
          </button>
        </div>
      </article>`;
    })
    .join("");
}

// --- Botón de compra → abre WhatsApp con el mensaje listo ---
document.addEventListener("click", (e) => {
  const boton = e.target.closest(".producto-boton");
  if (!boton) return;

  const nombre = boton.dataset.nombre;
  const precio = boton.dataset.precio;
  const mensaje = `Hola Nyvex Drop 👋 Me interesa este producto: *${nombre}* por $${precio}.00. ¿Está disponible? ¿Cuánto cuesta el envío a mi zona?`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );
});

cargarProductos();
