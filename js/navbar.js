//NAVIGATION TO BE ADDED TO EACH PAGE


let nav = document.createElement("nav")
let ul = document.createElement("ul")

let a0 = document.createElement("a")
a0.setAttribute("HREF", "index.html");
a0.appendChild(document.createTextNode("HOME"))

let a1 = document.createElement("a")
a1.setAttribute("HREF", "Blog.HTML");
a1.appendChild(document.createTextNode("BLOG"))

let a2 = document.createElement("a")
a2.setAttribute("HREF", "About.HTML");
a2.appendChild(document.createTextNode("ABOUT"))

let a3 = document.createElement("a")
a3.setAttribute("HREF", "Media.HTML");
a3.appendChild(document.createTextNode("MEDIA"))

let a4 = document.createElement("a")
a4.setAttribute("HREF", "Contact.HTML");
a4.appendChild(document.createTextNode("CONTACT"))

let a5 = document.createElement("a")
a5.setAttribute("HREF", "Wireframe.HTML");
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
document.getElementById("navigation").appendChild(nav)
