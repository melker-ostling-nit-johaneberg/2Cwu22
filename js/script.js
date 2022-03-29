
function HamburgerMeny(){
  let nav_mobil = document.getElementById("nav_mobil");
  let top = document.getElementById("top")
  if (nav_mobil.style.display === "block") {
    nav_mobil.style.display = "none";
    top.style.marginTop = "0vh"
  } else {
    nav_mobil.style.display = "block";
    top.style.marginTop = "7.5vh"

  }
}

// document.getElementById("header_mobil").addEventListener("click", HamburgerMeny());


// eventhandlers
