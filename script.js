const productos = {
  1: {
    nombre: "Polo Clásico",
    precio: 150,
    linkMP: "https://mpago.la/2gyiYbw"
  },
  2: {
    nombre: "Polera Premium",
    precio: 250,
    linkMP: "https://mpago.la/1q6W4md"
  },
  3: {
    nombre: "Par de Medias",
    precio: 50,
    linkMP: "https://mpago.la/1ZxSSk3"
  }
};

let productoSeleccionadoId = null;

function comprarProducto(id) {
  productoSeleccionadoId = id;

  const producto = productos[id];
  document.getElementById("producto-seleccionado").textContent = 
    `Producto: ${producto.nombre} - Precio unitario: S/ ${producto.precio}`;

  document.getElementById("productos").style.display = "none";
  document.getElementById("formulario-compra").style.display = "block";
}

async function enviarFormulario(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const producto = productos[productoSeleccionadoId];

  formData.append("Producto", producto.nombre);
  formData.append("Precio", producto.precio);
  formData.append("Cantidad", form.cantidad.value);

  try {
    const response = await fetch("https://formspree.io/f/mgvkjbwk", {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      alert("Formulario enviado correctamente. Redirigiendo al pago...");
      window.location.href = producto.linkMP;
    } else {
      alert("Hubo un problema al enviar el formulario. Intenta nuevamente.");
    }
  } catch (error) {
    alert("Error de conexión. Inténtalo más tarde.");
    console.error(error);
  }

  return false;
}