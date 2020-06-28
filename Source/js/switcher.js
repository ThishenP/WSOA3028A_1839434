
  document.getElementById("selector2").addEventListener("click", function () {
  
    let selector2 = document.getElementById("selector2")
    let selector1 = document.getElementById("selector1")
    if (selector2.className == "selected") {
  
    } else {
      selector2.className = "selected";
      document.getElementById("selector2-content").className = "grid"
      selector1.className = "";
      document.getElementById("selector1-content").className += " hide";
    }
  })
  
  document.getElementById("selector1").addEventListener("click", function () {
    let selector2 = document.getElementById("selector2")
    let selector1 = document.getElementById("selector1")
    if (selector1.className == "selected") {
  
    } else {
      selector1.className = "selected";
      document.getElementById("selector1-content").className = "grid"
      selector2.className = "";
      document.getElementById("selector2-content").className += " hide";
    }
  })


