function convertirAPesos(valor) {
    let valorFinal = valor * 595;
    return valorFinal;
}

function convertirADolares(valor) {
    let valorFinal = valor / 595;
    return valorFinal;
}

const usuarios = [
    { id: 2123234, nombre: 'juan', saldo: 200000, saldoUSD: 0 },
    { id: 2123235, nombre: 'carlos', saldo: 300000, saldoUSD: 0 },
    { id: 2123236, nombre: 'mariana', saldo: 60000, saldoUSD: 0 }
];

const nombreBuscado = prompt('Ingrese el nombre a buscar:');
const usuarioEncontrado = usuarios.find(usuario => usuario.nombre === nombreBuscado);

if (usuarioEncontrado) {
    const saldoUsuario = usuarioEncontrado.saldo;
    alert(`El usuario ${nombreBuscado} existe. Saldo: $${saldoUsuario}`);
    
    const opcion = prompt('¿Desea convertir el saldo a dólares? (Sí/No)').toLowerCase();
    if (opcion === 'sí' || opcion === 'si') {
        const saldoUSD = convertirADolares(saldoUsuario);
        usuarioEncontrado.saldoUSD = saldoUSD;
        alert(`Saldo convertido a dólares: $${saldoUSD}`);
    }
} else {
    alert(`El usuario ${nombreBuscado} no existe`);
}
