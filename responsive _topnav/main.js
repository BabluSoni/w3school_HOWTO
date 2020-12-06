function navbar() {
    var toggle = document.getElementById("toggle");
    if (toggle.className === "nav_box") {
        toggle.className += " responsive";
    } else {
        toggle.className = "nav_box";
    }
}