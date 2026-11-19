
// Obtener elementos del formulario
const formulario = document.getElementById("formHuesped");
const listaHuespedes = document.getElementById("listaHuespedes");

// Guardar los documentos registrados
let documentosRegistrados = [];

// Validar el formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();

    // Validar campos vacíos
    if (!nombre || !apellido || !documento || !telefono || !correo) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validar que el nombre y apellido contengan solo letras
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (!soloLetras.test(nombre) || !soloLetras.test(apellido)) {
        alert("El nombre y apellido solo deben contener letras.");
        return;
    }

    // Validar documento
    if (!/^\d+$/.test(documento)) {
        alert("El documento debe contener solamente números.");
        return;
    }

    // Validar teléfono
    if (!/^\d{7,15}$/.test(telefono)) {
        alert("Ingrese un número de teléfono válido.");
        return;
    }

    // Validar correo electrónico
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }

    // Evitar documentos duplicados
    if (documentosRegistrados.includes(documento)) {
        alert("Este documento ya se encuentra registrado.");
        return;
    }

    // Registrar huésped en la tabla
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

    // Limpiar formulario
    formulario.reset();

});
