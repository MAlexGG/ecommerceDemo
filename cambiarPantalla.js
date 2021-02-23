let body1 = document.querySelector(".body1");
let body2 = document.querySelector(".body2");

function cambiarPantalla(){
    
    if(body1.style.display == "block"){
        body1.style.display = "none"
    }
    if(body2.style.display == "none"){
        body2.style.display = "block"
    }
    console.log(pedido);
}

function retorno(){
    
    if(body2.style.display == "block"){
        body2.style.display = "none"
    }
    if(body1.style.display == "none"){
        body1.style.display = "block"; 
    }

    dishes2 = "";
    pintarMenu();
    console.log(carrito);
    console.log(listaPlatos);
    
}

