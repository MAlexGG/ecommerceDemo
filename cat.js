let listaCategorias= [ 

    { nombre: "Breakfast",
      img:"./Images/breakfast.png",
      id: 0
    },

    { nombre: "Fast Food",
      img:"./Images/fastfood.png",
      id: 1
    },

    { nombre: "Dinner",
      img:"./Images/dinner.png",
      id: 2
    },

    { nombre: "Postres",
      img:"./Images/postres.png",
      id: 3
    },

    { nombre: "Bebidas",
      img:"./Images/bebidas.png",
      id: 4
    }

];

let sliderCat= "";

function pintarCat(){
    for (let i=0; i<listaCategorias.length; i++){
        sliderCat+= `<div id="contenedorCategorias" class="contenedorCategorias" onclick="filtrado(this)" data-numero="${listaCategorias[i].id}" style="border:none;">
        <img class="contenedorCategoriasImg" src="${listaCategorias[i].img}" >
        <p class = "textoCategorias">${listaCategorias[i].nombre}</p>
    </div>`
    } 
}

pintarCat();
document.querySelector(".categorias").innerHTML=sliderCat;