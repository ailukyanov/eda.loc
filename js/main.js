document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.getElementById("hamburger"),
        aside = document.querySelector(".aside");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
        aside.classList.toggle("shown");
    });

});