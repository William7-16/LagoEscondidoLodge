function reservar(boton) {
    if (boton.innerText === "Reservar") {
        boton.innerText = "Cancelar Reserva";
        boton.classList.remove("reservar");
        boton.classList.add("cancelar");
    } else {
        boton.innerText = "Reservar";
        boton.classList.remove("cancelar");
        boton.classList.add("reservar");
    }
}