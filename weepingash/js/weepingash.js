// List of global variables
var jsfileversion='0001';//Version number to assist online debugging
function showMenuComponent(sect) {
var elements = document.getElementsByClassName("MenuComponent");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
var x = document.getElementById(sect);
x.style.display = "block";
document.getElementById("SerNo").textContent="."+jsfileversion;
}

