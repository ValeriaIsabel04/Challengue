let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes.");
        return;
    }

    let desordenados;
    do {
        desordenados = [...amigos].sort(() => Math.random() - 0.5);
    } while (amigos.some((nombre, i) => nombre === desordenados[i]));

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "<h3>Resultados del Amigo Secreto:</h3>";
    let lista = "<ul>";
    amigos.forEach((nombre, i) => {
        lista += `<li>${nombre} → ${desordenados[i]}</li>`;
    });
    lista += "</ul>";
    resultadoLista.innerHTML += lista;
}

function reiniciarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

