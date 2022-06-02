function menuSelect(id) {
	for (var i = 0; i < document.getElementById("menu").children.length; i++) {
  	document.getElementById("menu").children[i].children[0].classList.remove("active");
  }
  
	document.getElementById(id).className = "active";
}
