let listaCategorias = [

    {
        nombre: "Desayuno",
        img: "./Images/desayuno.svg",
        id: 0
    },

    {
        nombre: "Comida Rápida",
        img: "./Images/comidaRapida.svg",
        id: 1
    },

    {
        nombre: "Cena",
        img: "./Images/cena.svg",
        id: 2
    },

    {
        nombre: "Postres",
        img: "./Images/postres.svg",
        id: 3
    },

    {
        nombre: "Bebidas",
        img: "./Images/bebidas.svg",
        id: 4
    }

];

let sliderCat = "";

function pintarCat() {
    for (let i = 0; i < listaCategorias.length; i++) {
        sliderCat += `<div id="contenedorCategorias" class="contenedorCategorias" onclick="filtrado(this)" data-numero="${listaCategorias[i].id}" style="border:none;">
        <img class="contenedorCategoriasImg" src="${listaCategorias[i].img}" >
        <p class = "textoCategorias">${listaCategorias[i].nombre}</p>
    </div>`
    }
}

pintarCat();
document.querySelector(".categorias").innerHTML = sliderCat;