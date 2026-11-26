let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");


edad.addEventListener("input", function() {
    edad.value = edad.value.replace(/[^0-9]/g, "");
});

let boton = document.getElementById("iniciar");

boton.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Por favor, ingresa tu nombre.");
    } else {
        localStorage.setItem("nombreUsuario", nombre);

        window.location.href = "menu.html";
    }

});