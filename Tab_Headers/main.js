function Mycity(city, evt, color) {
    // var init
    var i, tab_btns, tab_contents;

    // hide all elements form contentes
    tab_contents = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.display = "none";
    };

    // Remove the background color of all tablinks/buttons
    tab_btns = document.getElementsByClassName("tab_btn");
    for (i = 0; i < tab_btns.length; i++) {
        tab_btns[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(city).style.display = "flex";

    // Add the specific color to the button used to open the tab content
    evt.style.backgroundColor = color;
}

// default tab
document.getElementById("default").click();