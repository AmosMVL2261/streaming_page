function push_left(){
    document.getElementById("main").style.margin = "0px 0px 0px 0px";
    document.getElementById("btn").style.left = "1vw";/*El boton queda en su posicion inicial*/
    
}

function push_right(){
    document.getElementById("main").style.margin = "0px 0px 0px 250px";
    document.getElementById("btn").style.left = "-10vw"; /*El boton queda oculto cuando se recorre verticalmente la pagina*/
}

document.getElementById("cancel").addEventListener("click", push_left);
document.getElementById("btn").addEventListener("click", push_right);