
// Seleccionar todas las tarjetas de habitaciones
const tarjetas = document.querySelectorAll(".tarjeta-habitacion");

// Función para actualizar el resumen
function actualizarResumen() {

    let disponibles = 0;
    let ocupadas = 0;
    let reservadas = 0;
    let limpieza = 0;
    let mantenimiento = 0;

    tarjetas.forEach((tarjeta) => {
        const estado = tarjeta.querySelector(".estado").textContent.trim();

        switch (estado) {
            case "Disponible":
                disponibles++;
                break;

            case "Ocupada":
                ocupadas++;
                break;

            case "Reservada":
                reservadas++;
                break;

            case "En limpieza":
                limpieza++;
                break;

            case "Mantenimiento":
                mantenimiento++;
                break;
        }
    });

    document.getElementById("totalDisponibles").textContent = disponibles;
    document.getElementById("totalOcupadas").textContent = ocupadas;
    document.getElementById("totalReservadas").textContent = reservadas;
    document.getElementById("totalLimpieza").textContent = limpieza;
    document.getElementById("totalMantenimiento").textContent = mantenimiento;
}

// Permitir cambiar el estado de las habitaciones
tarjetas.forEach((tarjeta) => {

    const boton = tarjeta.querySelector("button");
    const estado = tarjeta.querySelector(".estado");

    boton.addEventListener("click", () => {

        const nuevoEstado = prompt(
            "Escribe el nuevo estado: Disponible, Ocupada, Reservada, En limpieza o Mantenimiento"
        );

        if (nuevoEstado === null) {
            return;
        }

        const estadosPermitidos = [
            "Disponible",
            "Ocupada",
            "Reservada",
            "En limpieza",
            "Mantenimiento"
        ];

        const estadoEncontrado = estadosPermitidos.find(
            elemento => elemento.toLowerCase() === nuevoEstado.trim().toLowerCase()
        );

        if (!estadoEncontrado) {
            alert("Estado no válido. Intenta nuevamente.");
            return;
        }

        estado.textContent = estadoEncontrado;
        estado.className = "estado";

        const clases = {
            "Disponible": "disponible",
            "Ocupada": "ocupada",
            "Reservada": "reservada",
            "En limpieza": "limpieza",
            "Mantenimiento": "mantenimiento"
        };

        estado.classList.add(clases[estadoEncontrado]);

        actualizarResumen();

        alert("El estado de la habitación se actualizó correctamente.");
    });

});

actualizarResumen();
