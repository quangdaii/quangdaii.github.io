//
const menuButton = document.querySelector(".menu-mobile")
const menu = document.querySelector(".header_bottom")
const btnOverlay = document.querySelector(".overlay")
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    btnOverlay.classList.toggle('active');
})
btnOverlay.addEventListener('click', () =>{
    menu.classList.remove('active');
    btnOverlay.classList.remove('active');
})
//
const btnBtnsub = document.querySelector(".btn_sub")
const Submenu = document.querySelector(".sub_menu")
btnBtnsub.addEventListener('click', () =>{
    Submenu.classList.toggle('active');
    btnBtnsub.classList.toggle('active');
})
//
var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes();
  var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
var dateTime = time + " | " + date ;
for(let i = 0 ; i < time.length; i ++){
    document.getElementById("time").innerHTML = dateTime;
}
//
var mybutton = document.getElementById("btn_scroll");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click' ,() =>{
    document.documentElement.scrollTop = 0;
})

