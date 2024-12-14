

var menu = document.getElementById("menu");


var iconButton = document.getElementById("iconButton");


var menuHidden = false;


iconButton.addEventListener("click", function() {
    menu.classList.toggle("show"); 
    if (menuHidden) {
        menuHidden = false; 
    }
});


window.addEventListener("scroll", function() {
    if (window.scrollY > 100 && !menuHidden) { 
        menu.classList.remove("show"); 
        menuHidden = true; 
    }
});



