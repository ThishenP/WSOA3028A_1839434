const button = document.querySelector('button')

button.addEventListener("click",function(){
    let el = document.createElement("p");
    el.innerHTML= "Test"
    document.body.appendChild(el)
})