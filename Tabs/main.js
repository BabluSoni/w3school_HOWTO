// function
function Tabfun(evt, tabs) {
    var i, tab_contents, tab_btns;

    // hide all tabs_contents with for loop
    tab_contents = document.getElementsByClassName("tabs_contents");
    for (i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.display = "none";
    };

    // Get all elements with class="tablinks" and remove the class "active"

    tab_btns = document.getElementsByClassName("tabs_btn");
    for (i = 0; i < tab_btns.length; i++) {
        tab_btns[i].className = tab_btns[i].className.replace(" active", "");
    };

    // Show the current tab, and add an "active" class to the button that opened the tab

    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className += " active";
};

// default tab
document.getElementById("defaultOpen").click();