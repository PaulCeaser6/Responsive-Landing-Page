const toggleBar = document.querySelector('#toggle');
const closeBar = document.querySelector('#close');
const sideMenu = document.querySelector('#sidebar');

toggleBar.addEventListener("click", function() {
   sideMenu.style.width = "250px";
})

closeBar.addEventListener("click", function() {
   sideMenu.style.width = "0px";
})