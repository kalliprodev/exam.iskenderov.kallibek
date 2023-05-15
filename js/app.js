let containerElement = document.querySelector(".container");
let navbar = document.getElementById("navbar");
let pTextclass = document.querySelector(".pText")

containerElement.addEventListener("click",(event)=>{
  const values = event.target
   navbar.setAttribute("data-clicks",event.srcElement.dataset.clicks)
  console.log(values);    
})






// function pTextadd(pText) {
//     pText.classList.remove('hidden')
//     pText.classList.add('hidden')
// }






// function ptextadd(pText) {
//     pText.classList.remove('block')
//     pText.classList.add('flex')
// }



