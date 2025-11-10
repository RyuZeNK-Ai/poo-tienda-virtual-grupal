import Usuario from "./src/models/Usuario.js";
import Admin from "./src/models/Admin.js";
import Pedido from "./src/models/Pedido.js";
import ClienteVIP from "./src/models/ClienteVIP.js";
import { inventarioInicial } from "./src/data/inventario.js";

// Crear usuario y admin
const user1 = new Usuario("Neo", "neo@matrix.com");
const admin1 = new Admin("Hackerman", "hackerman@matrix.com", [...inventarioInicial]);

// Usuario agrega productos al carrito
user1.agregarAlCarrito(inventarioInicial[0]); // Teclado
user1.agregarAlCarrito(inventarioInicial[1]); // Mouse
user1.verCarrito();

// Usuario genera pedido
const pedido1 = new Pedido(user1, user1.carrito);
console.log(`\n💳 Pedido generado con total: $${pedido1.total}\n`);

// Admin procesa pedido
admin1.procesarPedido(pedido1);

// Simulación de actualización de inventario
admin1.eliminarProducto("Mouse");

// ===== EXTRA: Cliente VIP =====
const vip1 = new ClienteVIP("Trinity", "trinity@matrix.com");
vip1.mostrarInfo();
vip1.aplicarDescuento();

// ===== Polimorfismo =====
console.log("\n=== 🧬 Polimorfismo ===");
[user1, admin1, vip1].forEach(u => u.mostrarInfo());
