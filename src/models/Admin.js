import Usuario from "./Usuario.js";

export default class Admin extends Usuario {
  constructor(nombre, correo, inventario) {
    super(nombre, correo);
    this.inventario = inventario;
  }

  agregarProducto(producto) {
    this.inventario.push(producto);
    console.log(`🧰 ${this.nombre} agregó "${producto.nombre}" al inventario.`);
  }

  eliminarProducto(nombreProducto) {
    const index = this.inventario.findIndex(p => p.nombre === nombreProducto);
    if (index !== -1) {
      this.inventario.splice(index, 1);
      console.log(`🗑️ ${this.nombre} eliminó "${nombreProducto}" del inventario.`);
    } else {
      console.log(`⚠️ El producto "${nombreProducto}" no existe en el inventario.`);
    }
  }

  procesarPedido(pedido) {
    console.log(`🧾 ${this.nombre} procesó el pedido de ${pedido.usuario.nombre}. Total: $${pedido.total}`);
  }

  mostrarInfo() {
    console.log(`🛠️ Admin: ${this.nombre} (${this.correo})`);
  }
}
