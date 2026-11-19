
const formulario = document.getElementById("formPago");
const listaPagos = document.getElementById("listaPagos");

let contadorPagos = 1;

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const reserva = document.getElementById("reserva").value.trim();
    const huesped = document.getElementById("huesped").value.trim();
    const fechaPago = document.getElementById("fechaPago").value;
    const monto = Number(document.getElementById("monto").value);
    const metodoPago = document.getElementById("metodoPago").value;

    if (!reserva || !huesped || !fechaPago || !monto || !metodoPago) {
        alert("Por favor, complete todos los campos.");
        return;
    }

if (!Number.isInteger(Number(reserva)) || Number(reserva) <= 0) {
    alert("El número de reserva debe ser un número entero positivo.");
    return;
}

const expresionNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

if (!expresionNombre.test(huesped)) {
    alert("El nombre del huésped solo debe contener letras y espacios.");
    return;
}

const hoy = new Date();

const fechaActual = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

if (fechaPago > fechaActual) {
    alert("La fecha del pago no puede ser posterior al día actual.");
    return;
}

    if (monto <= 0 || !Number.isFinite(monto)) {
        alert("Ingrese un monto válido.");
        return;
    }

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${contadorPagos}</td>
        <td>${reserva}</td>
        <td>${huesped}</td>
        <td>${fechaPago}</td>
        <td>$${monto.toLocaleString("es-CO")}</td>
        <td>${metodoPago}</td>
    `;

    listaPagos.appendChild(fila);

    contadorPagos++;

    alert("El pago se registró correctamente.");

    formulario.reset();

});
