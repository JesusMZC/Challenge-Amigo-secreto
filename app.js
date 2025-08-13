// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo() {
    // Capturar la entrada
    let nombreAmigo = document.getElementById("amigo").value;

    //Validar la entrada
    if(nombreAmigo == "") {
        alert("por favor, inserte un nombre.");
        return;
    }

    //validar que no sea solo numeros
    if(/^\d+$/.test(nombreAmigo)){
        alert("El nombre no puede ser solo números.");
        return;
    }
    
    //Actualizar array de amigos
    amigos.push(nombreAmigo);

    actualizarListaAmigos(amigos);

    //Limpiar el campo de entrada
    document.getElementById("amigo").value ="";
}

function actualizarListaAmigos(amigos) {
    // Obtener lista
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML="";

    for (let i=0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =`<li>${amigoSorteado}</li>`;

}