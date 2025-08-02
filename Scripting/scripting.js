var btn = document.querySelector("#the-btn");
var fl_menu = document.querySelector(".floating-menu-holder");
var any0 = document.querySelector("body");

btn.addEventListener("click", function(e){
    e.stopPropagation();
    if(fl_menu.style.display == "block"){
        fl_menu.style.display = "none";
    }else{
        fl_menu.style.display = "block";
    }
});

fl_menu.addEventListener("click", function(e){
    e.stopPropagation(); 
});

any0.addEventListener("click", function(){
    fl_menu.style.display = "none";
});