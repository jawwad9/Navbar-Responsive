let menu = document.querySelector('.icon')
let ul = document.querySelector('ul')
let bar = document.querySelector('#bar')



menu.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);
    
    if(ul.classList == "showData"){
        bar.classList= "fa-solid fa-xmark"
    }else{
        bar.classList= "fa-solid fa-list"
    }
})