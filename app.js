let sorteoRealizado= false;
function verificarIntento() {
    let input= document.getElementById("amigo");
    if (sorteoRealizado) {
        alert("El sorteo ya ha sido realizado. Por favor, reinicia la lista para agregar nuevos participantes.");
        input.value = ""; // Limpiar el campo de entrada
        return;
}

