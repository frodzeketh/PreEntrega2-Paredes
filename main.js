const miBoton = document.querySelector('#miBoton');
const contadorCarrito = document.getElementById('contador__carrito');
const itemsCarrito = document.getElementById('items');

miBoton.addEventListener('click', () => {
    // Muestra el cuadro de diálogo personalizado
    const cantidad = prompt('¿Cuántos pesos quieres comprar en XMR?');
    
    if (cantidad !== null && cantidad !== '') {
        const valorXMR = 143.26;
        const total = parseFloat(cantidad) / valorXMR;
        
        const item = {
            imagen: 'ruta_de_la_imagen', // Reemplaza con la ruta de la imagen
            nombre: 'Producto X',        // Reemplaza con el nombre del producto
            cantidad: cantidad,
            total: total.toFixed(2),
        };
        
        agregarAlCarrito(item);
        
        // Muestra el mensaje de compra exitosa
        alert(`¡Exitoso! Compraste ${cantidad} pesos. Equivalente a ${item.total} XMR.`);
        
        // Actualiza el contador del carrito
        contadorCarrito.textContent = parseInt(contadorCarrito.textContent) + 1;
    }
});

function agregarAlCarrito(item) {
    const fila = document.createElement('tr');
    
    const columnaImagen = document.createElement('td');
    const imagen = document.createElement('img');
    imagen.src = item.imagen;
    imagen.alt = item.nombre;
    imagen.width = 50;
    columnaImagen.appendChild(imagen);
    
    const columnaNombre = document.createElement('td');
    columnaNombre.textContent = item.nombre;
    
    const columnaCantidad = document.createElement('td');
    columnaCantidad.textContent = `${item.cantidad} pesos`;
    
    const columnaTotal = document.createElement('td');
    columnaTotal.textContent = `$${item.total} XMR`;
    
    fila.appendChild(columnaImagen);
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaCantidad);
    fila.appendChild(columnaTotal);
    
    itemsCarrito.appendChild(fila);
}
