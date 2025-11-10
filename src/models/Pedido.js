export default class Pedido {
  constructor(usuario, productos) {
    this.usuario = usuario;
    this.productos = productos;
    this.total = this.calcularTotal();
  }

  calcularTotal() {
    return this.productos.reduce((acc, p) => acc + p.precio, 0);
  }
}
