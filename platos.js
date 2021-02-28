let listaPlatos = [{
        nombre: "Plato 01",
        descripcion: "Con vegetales asados",
        precio: 9.00,
        img: "./Images/pollo.jpg",
        id: 0,
        cantidad: 0,
        cat: "Cena"
    },
    {
        nombre: "Plato 02",
        descripcion: "Con café y zumo",
        precio: 23.00,
        img: "./Images/desayuno2.jpg",
        id: 1,
        cantidad: 0,
        cat: "Desayuno"
    },
    {
        nombre: "Plato 03",
        descripcion: "Con papas fritas",
        precio: 21.00,
        img: "./Images/burgerfast.jpg",
        id: 2,
        cantidad: 0,
        cat: "Comida Rápida"
    },
    {
        nombre: "Plato 04",
        descripcion: "De distintos sabores",
        precio: 5.00,
        img: "./Images/pizafast.jpg",
        id: 3,
        cantidad: 0,
        cat: "Comida Rápida"
    },
    {
        nombre: "Plato 05",
        descripcion: "de ternera, pollo o vegetales",
        precio: 3.50,
        img: "./Images/DURmfast.jpg",
        id: 4,
        cantidad: 0,
        cat: "Comida Rápida"
    },
    {
        nombre: "Plato 06",
        descripcion: "Con café y zumo",
        precio: 15.00,
        img: "./Images/break1.jpg",
        id: 5,
        cantidad: 0,
        cat: "Desayuno"
    },
    {
        nombre: "Plato 07",
        descripcion: "Con salsa de fresas",
        precio: 4.50,
        img: "./Images/cheesecake.jpg",
        id: 6,
        cantidad: 0,
        cat: "Postres"
    },
    {
        nombre: "Plato 08",
        descripcion: "Chardonnay",
        precio: 3.50,
        img: "./Images/vinoBlanco.jpg",
        id: 7,
        cantidad: 0,
        cat: "Bebidas"
    },
    {
        nombre: "Plato 09",
        descripcion: "Merlot",
        precio: 3.50,
        img: "./Images/vinoTinto.jpg",
        id: 8,
        cantidad: 0,
        cat: "Bebidas"
    },
];



function pintarMenu() {
    let dishes = "";
    for (let i = 0; i < listaPlatos.length; i++) {
        dishes += `<div class="infoPlatos ${listaPlatos[i].cat}" data-numero="${listaPlatos[i].id}">
    <img src="${listaPlatos[i].img}">
    <div class="infoDetalle">
        <p class="price">$${listaPlatos[i].precio}</p>
        <h4>${listaPlatos[i].nombre}</h4>
        <p>${listaPlatos[i].descripcion}</p>
        <div class="counter">
            <button class="counterLeft" onclick="disminuir(this)">-</button>
            <p id="visor">${listaPlatos[i].cantidad}</p>
            <button class="counterRight" onClick="aumentar(this)">+</button>
        </div>
    </div>
</div>`
    }

    document.querySelector(".platos").innerHTML = dishes;

}

pintarMenu();


function reinicio() {
    pintarMenu();

    let categorias = document.querySelectorAll(".contenedorCategorias")
    let textoCategoria = document.querySelectorAll(".textoCategorias")

    categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
    textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'))
}