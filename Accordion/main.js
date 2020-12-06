// selector
var acc = document.getElementsByClassName("accordion");
var icon = document.querySelectorAll("i");

// looping for acc buttions
for (var i = 0; i < acc.length; i++) {
    // event for acc
    acc[i].addEventListener("click", function() {
        // toggle acc backgroung on click
        this.classList.toggle("active");

        var nextsbl = this.nextElementSibling;

        // Normal plain show/hide on click

        // if (nextsbl.style.display === "block") {
        //     nextsbl.style.display = "none";
        // } else {
        //     nextsbl.style.display = "block";
        //     icon.classList.replace("fas fa-minus");
        // }


        // Animated plain show/hide on click
        if (nextsbl.style.maxHeight) {
            nextsbl.style.maxHeight = null;
        } else {
            nextsbl.style.maxHeight = nextsbl.scrollHeight + "px";
            icon.classList.toggle("fas fa-minus")
        }

    });
}