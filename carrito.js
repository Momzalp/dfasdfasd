let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`Se agregó al carrito: ${nombre}`);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const lista = document.getElementById('lista-carrito');
  const totalP = document.getElementById('total');
  const btnPagar = document.getElementById('btn-pagar');

  if (!lista || !totalP) return;

  lista.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - S/${item.precio.toFixed(2)}`;
    lista.appendChild(li);
    total += item.precio;
  });

  totalP.textContent = `Total: S/${total.toFixed(2)}`;

  if (total > 0) {
    btnPagar.style.display = 'inline-block';
  } else {
    btnPagar.style.display = 'none';
  }
}

// Actualizar UI al cargar la página carrito.html
document.addEventListener('DOMContentLoaded', () => {
  actualizarCarritoUI();
});