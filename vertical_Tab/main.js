// working on tabs button function
function Mytabs(pagename) {
    // initalise variables
    var i, tab_contents;

    // hide all tabs contents with using for loop

    tab_contents = document.getElementsByClassName("tabs_content");
    for (i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.display = "none";
    }

    // show contents elements 
    document.getElementById(pagename).style.display = "block";
}

document.getElementById("default").click();