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

window.addEventListener("scroll", function() {
 if(window.pageYOffset > 50) {
   document.getElementById("nav_container").className="active";
 document.getElementById("fir_text").className="active1";
 document.getElementById("sec_text").className="active1";
 document.getElementById("thi_text").className="active1";
 document.getElementById("logo").style.display="none";
 document.getElementById("logo1").style.display="block";
 }
 else {
    document.getElementById("nav_container").className="color";
 document.getElementById("fir_text").className="for_diff_color";
 document.getElementById("sec_text").className="for_diff_color";
 document.getElementById("thi_text").className="for_diff_color";
 document.getElementById("logo").style.display="block";
 document.getElementById("logo1").style.display="none";
 }
if(document.documentElement.clientWidth <= "1000") {
    document.getElementById("logo").style.display="none";
    document.getElementById("logo1").style.display="none";
}

});

window.addEventListener("resize", function(){
    if(document.documentElement.clientWidth <= "1000") {
        document.getElementById("logo").style.display="none";
 document.getElementById("logo1").style.display="none";
    } 
   if(window.pageYOffset > 50) {
    document.getElementById("nav_container").className="active";
    document.getElementById("fir_text").className="active1";
    document.getElementById("sec_text").className="active1";
    document.getElementById("thi_text").className="active1";
   
   }else {
    document.getElementById("nav_container").className="color";
 document.getElementById("fir_text").className="for_diff_color";
 document.getElementById("sec_text").className="for_diff_color";
 document.getElementById("thi_text").className="for_diff_color";
 
 }
})
