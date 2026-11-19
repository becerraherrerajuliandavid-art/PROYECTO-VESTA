
const formulario = document.getElementById("formHuesped");
const listaHuespedes = document.getElementById("listaHuespedes");

let documentosRegistrados = [];

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (!nombre || !apellido || !documento || !telefono || !correo) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (!soloLetras.test(nombre) || !soloLetras.test(apellido)) {
        alert("El nombre y apellido solo deben contener letras.");
        return;
    }

    if (!/^\d+$/.test(documento)) {
        alert("El documento debe contener solamente números.");
        return;
    }

    if (!/^\d{7,15}$/.test(telefono)) {
        alert("Ingrese un número de teléfono válido.");
        return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }

    if (documentosRegistrados.includes(documento)) {
        alert("Este documento ya se encuentra registrado.");
        return;
    }

    const nuevaFila = document.createElement("tr");

    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${documento}</td>
        <td>${telefono}</td>
        <td>${correo}</td>
    `;

    listaHuespedes.appendChild(nuevaFila);

    documentosRegistrados.push(documento);

    alert("Huésped registrado correctamente.");

    formulario.reset();

});
