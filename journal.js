let int = document.querySelector('.int');
let btn = document.querySelector(".btn");
let txt = document.querySelector(".text");

btn.addEventListener("click",()=>{
    txt.style.display = "flex";
    txt.innerText = int.value;
})