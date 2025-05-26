let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito-lista");
  const total = document.getElementById("total");
  if (!lista || !total) return;
  lista.innerHTML = "";
  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
    lista.appendChild(li);
    suma += item.precio;
  });
  total.textContent = suma.toFixed(2);
}

function realizarPago() {
  alert("Simulación de pago realizada.");
}
