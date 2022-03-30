
function HamburgerMeny(){
  let nav_mobil = document.getElementById("nav_mobil");
  let top = document.getElementById("top")
  let top_2 = document.getElementById("top_2")
  if (nav_mobil.style.display === "block") {
    nav_mobil.style.display = "none";
    top.style.marginTop = "0vh"
    top_2.style.marginTop = "0vh"
  } else {
    nav_mobil.style.display = "block";
    top.style.marginTop = "5vh"
    top_2.style.marginTop = "5vh"

  }
}

// document.getElementById("header_mobil").addEventListener("click", HamburgerMeny());


// eventhandlers
