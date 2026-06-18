function abrirCarta(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("carta").style.display = "flex";
}

function verFotos(){
    document.getElementById("carta").style.display = "none";
    document.getElementById("galeria").style.display = "block";
}

function volverInicio(){
    document.getElementById("carta").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("inicio").style.display = "flex";
}

function abrirModal(imagen){

    document.getElementById("modal").style.display = "flex";

    document.getElementById("imagenGrande").src = imagen.src;

}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}function abrirModal(imagen){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("imagenGrande").src = imagen.src;
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}