//TO BE ADDED TO EACH PAGE
//Creates a navbar and handles back functionality

const menu = [
    {title: "HOME", link: "/"},
    {title: "BLOG", link: "/Blog"},
    {title: "ABOUT", link: "/About"},
    {title: "MEDIA", link: "/Media"},
    {title: "CONTACT", link: "/Contact"},
    {title: "UI", link: "/Wireframe"},
    {title: "CHARACTER", link: "/Character"},
   
]

// function createBanner(){
//     const header= document.querySelector("header")
//     const banner = document.createElement("section")
//     banner.classList.add("banner")
//     header.appendChild(banner)
// }
function initialiseMenu(){
    const header= document.querySelector("header")
    header.classList.add("main")
    const nav = document.createElement("nav");
    const ul =  document.createElement("ul");


    const nameDiv = document.createElement("div")
    const h1 = document.createElement("h1");
    const p =document.createElement("p");
    const logoLink = document.createElement("a");

    logoLink.innerText="AVERY SOSA"
    logoLink.href="/"
    h1.appendChild(logoLink)
    p.innerText="Skating & Photography"
    nameDiv.appendChild(h1)
    nameDiv.appendChild(p)
    nav.appendChild(nameDiv)
    
    for(let element of menu){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = element.title
        a.href = element.link;
        li.appendChild(a)
        ul.appendChild(li);   
    }
    nav.appendChild(ul);
    header.appendChild(nav);
};



document.addEventListener('DOMContentLoaded',initialiseMenu());

document.addEventListener("scroll", function(){

    const header= document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
   
})


// let nav = document.createElement("nav")
// let ul = document.createElement("ul")

// let a0 = document.createElement("a")
// a0.setAttribute("HREF", "../Pages/index.html");
// a0.appendChild(document.createTextNode("HOME"))

// let a1 = document.createElement("a")
// a1.setAttribute("HREF", "../Pages/Blog.html");
// a1.appendChild(document.createTextNode("BLOG"))

// let a2 = document.createElement("a")
// a2.setAttribute("HREF", "../Pages/About.html");
// a2.appendChild(document.createTextNode("ABOUT"))

// let a3 = document.createElement("a")
// a3.setAttribute("HREF", "../Pages/Media.html");
// a3.appendChild(document.createTextNode("MEDIA"))

// let a4 = document.createElement("a")
// a4.setAttribute("HREF", "../Pages/Contact.html");
// a4.appendChild(document.createTextNode("CONTACT"))

// let a5 = document.createElement("a")
// a5.setAttribute("HREF", "../Pages/Wireframe.html");
// a5.appendChild(document.createTextNode("WEBSITE STYLE"))

// let a7 = document.createElement("a")
// a7.setAttribute("HREF", "../Pages/Character.html");
// a7.appendChild(document.createTextNode("CHARACTER"))

// let a6 = document.createElement("button")
// a6.setAttribute("id", "back");
// a6.appendChild(document.createTextNode("BACK"))

// let li = document.createElement("li")
// li.appendChild(a0)
// ul.appendChild(li)

// let li1 = document.createElement("li")
// li1.appendChild(a1)
// ul.appendChild(li1)

// let li2 = document.createElement("li")
// li2.appendChild(a2)
// ul.appendChild(li2)

// let li3 = document.createElement("li")
// li3.appendChild(a3)
// ul.appendChild(li3)

// let li4 = document.createElement("li")
// li4.appendChild(a4)
// ul.appendChild(li4)

// let li5 = document.createElement("li")
// li5.appendChild(a5)
// ul.appendChild(li5)

// let li7 = document.createElement("li")
// li7.appendChild(a7)
// ul.appendChild(li7)

// let li6 = document.createElement("li")
// li6.appendChild(a6)
// ul.appendChild(li6)

// nav.appendChild(ul)
// let h = document.createElement("h1")
// h.appendChild(document.createTextNode("AVERY SOSA"))
// let p = document.createElement("p")
// p.appendChild(document.createTextNode("Skateboarding + Photography"))

// document.getElementById("navbar").appendChild(h)
// document.getElementById("navbar").appendChild(p)
// document.getElementById("navbar").appendChild(nav)


// document.getElementById("back").addEventListener("click", function(){
//     window.history.back();
//    });
 