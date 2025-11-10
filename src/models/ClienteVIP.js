import Usuario from "./Usuario.js";

export default class ClienteVIP extends Usuario {
  constructor(nombre, correo) {
    super(nombre, correo);
  }

  aplicarDescuento() {
    console.log(`🎉 ${this.nombre} ha recibido un descuento especial del 10%.`);
  }
}