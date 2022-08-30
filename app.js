
(function () {
    [...document.querySelectorAll(".nav-btns")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active").classList.remove("active");
           document.querySelector('[data-id]').classList.add("active");
        })
    });

    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // })
})();
