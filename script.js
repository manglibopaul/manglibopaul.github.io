document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = this.getAttribute("data-link");
        });
    });
});