export default class Usuario {
  #id;

  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = [];
    this.#id = Math.floor(Math.random() * 10000);
  }

  agregarAlCarrito(producto) {
    this.carrito.push(producto);
    console.log(`🛍️ ${this.nombre} agregó "${producto.nombre}" al carrito.`);
  }

  verCarrito() {
    console.log(`🛒 Carrito de ${this.nombre}:`, this.carrito.map(p => p.nombre));
  }

  getId() {
    return this.#id;
  }

  mostrarInfo() {
    console.log(`👤 Usuario: ${this.nombre} (${this.correo})`);
  }
}
