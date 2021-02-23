function filtrado(categoria) {
    categoriaTexto= categoria.querySelector("p").innerHTML;
    

let dishes = "";

function pintarMenu(){
    for (let i = 0; i < listaPlatos.length; i++){
        if(categoriaTexto === listaPlatos[i].cat){
    dishes+= `<div class="infoPlatos ${listaPlatos[i].cat}" data-numero="${listaPlatos[i].id}">
    <img src="${listaPlatos[i].img}">
    <div class="infoDetalle">
        <p class="price">$${listaPlatos[i].precio}</p>
        <h4>${listaPlatos[i].nombre}</h4>
        <p>${listaPlatos[i].descripcion}</p>
        <div class="counter">
            <button class="counterLeft" onClick="disminuir(this)">-</button>
            <p id="visor">${listaPlatos[i].cantidad}</p>
            <button class="counterRight" onClick="aumentar(this)">+</button>
        </div>
    </div>
</div>`
}
}
}

pintarMenu();
document.querySelector(".platos").innerHTML = dishes;
}



let categorias = document.querySelectorAll(".contenedorCategorias")
let textoCategoria = document.querySelectorAll(".textoCategorias")
let imagenCategoria = document.querySelectorAll(".contenedorCategoriasImg")


categorias.forEach(category =>{
    category.addEventListener('click', function(e){
        categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
        this.classList.add('contenedorCategoriasClick')
        textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'))
        this.childNodes[3].classList.add('textoCategoriasClick')
        textoCategoria.forEach(img => img.classList.remove('contenedorCategoriasImgClick'))
        this.childNodes[1].classList.add('contenedorCategoriasImgClick')
        
    })
})







