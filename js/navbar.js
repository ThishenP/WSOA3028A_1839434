//NAVIGATION TO BE ADDED TO EACH PAGE
//Done in this way to avoid using innerHTML


let nav = document.createElement("nav")
let ul = document.createElement("ul")

let a0 = document.createElement("a")
a0.setAttribute("HREF", "../Pages/index.html");
a0.appendChild(document.createTextNode("HOME"))

let a1 = document.createElement("a")
a1.setAttribute("HREF", "../Pages/Blog.html");
a1.appendChild(document.createTextNode("BLOG"))

let a2 = document.createElement("a")
a2.setAttribute("HREF", "../Pages/About.html");
a2.appendChild(document.createTextNode("ABOUT"))

let a3 = document.createElement("a")
a3.setAttribute("HREF", "../Pages/Media.html");
a3.appendChild(document.createTextNode("MEDIA"))

let a4 = document.createElement("a")
a4.setAttribute("HREF", "../Pages/Contact.html");
a4.appendChild(document.createTextNode("CONTACT"))

let a5 = document.createElement("a")
a5.setAttribute("HREF", "../Pages/Wireframe.html");
a5.appendChild(document.createTextNode("WIREFRAME"))

let li = document.createElement("li")
li.appendChild(a0)
ul.appendChild(li)

let li1 = document.createElement("li")
li1.appendChild(a1)
ul.appendChild(li1)

let li2 = document.createElement("li")
li2.appendChild(a2)
ul.appendChild(li2)

let li3 = document.createElement("li")
li3.appendChild(a3)
ul.appendChild(li3)

let li4 = document.createElement("li")
li4.appendChild(a4)
ul.appendChild(li4)

let li5 = document.createElement("li")
li5.appendChild(a5)
ul.appendChild(li5)

nav.appendChild(ul)
let h = document.createElement("h1")
h.appendChild(document.createTextNode("AVERY SOSA"))
let p = document.createElement("p")
p.appendChild(document.createTextNode("Skateboarding + Photography"))

document.getElementById("navbar").appendChild(h)
document.getElementById("navbar").appendChild(p)
document.getElementById("navbar").appendChild(nav)
