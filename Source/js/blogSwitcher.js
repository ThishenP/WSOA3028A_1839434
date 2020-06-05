document.getElementById("charBlogButton").addEventListener("click",function(){
    let charButton = document.getElementById("charBlogButton")
    let theoryBlogButton=document.getElementById("theoryBlogButton")
    if (charButton.className == "selected") {
  
    } else {
      charButton.className = "selected";
      document.getElementById("character-blog").className+=" hide";
      theoryBlogButton.className="";
      document.getElementById("theory-blog").className="grid";
    }
  })

  document.getElementById("theoryBlogButton").addEventListener("click",function(){
    let charButton = document.getElementById("charBlogButton")
    let theoryBlogButton=document.getElementById("theoryBlogButton")
    if (theoryBlogButton.className == "selected") {
  
    } else {
      theoryBlogButton.className = "selected";
      document.getElementById("theory-blog").className+=" hide";
      charButton.className="";
      document.getElementById("character-blog").className="grid";
    }
  })