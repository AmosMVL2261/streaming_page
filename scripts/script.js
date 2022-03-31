function push_left(){
    document.getElementById("main").style.margin = "0px 0px 0px 0px";
}

function push_right(){
    document.getElementById("main").style.margin = "0px 0px 0px 250px";
}

document.getElementById("cancel").addEventListener("click", push_left);
document.getElementById("btn").addEventListener("click", push_right);