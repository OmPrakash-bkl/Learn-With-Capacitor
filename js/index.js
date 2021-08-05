function showPopUpNav() {
if(document.getElementById("nav_container").className=="color") {
    document.getElementById("nav_container").className="white";
    document.getElementById("popup_navbar").style.top = "6rem";
    document.getElementById("popup_navbar").style.transition="0.3s";
    document.getElementById("burger_btn").src = "./images/letter-x.png";

} else {
    document.getElementById("nav_container").className="color";
    document.getElementById("popup_navbar").style.top = "-12rem";
    document.getElementById("popup_navbar").style.transition="-0.3s";
    document.getElementById("burger_btn").src = "./images/menu.png";
} 

}



window.addEventListener("resize", function() {
    if(document.documentElement.clientWidth > "1000") {
        document.getElementById("popup_navbar").style.top = "-12rem";
        document.getElementById("popup_navbar").style.transition="-0.3s";
        document.getElementById("nav_container").className="color";
    document.getElementById("burger_btn").src = "./images/menu.png";
       
    }
   
   
});