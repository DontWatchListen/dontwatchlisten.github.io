document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("styleToggle");
    const html = document.documentElement;

    // Check localStorage for override state
    if (localStorage.getItem("overrideStyle") === "true") {
        html.removeAttribute("data-style-disabled");
    } else {
        html.setAttribute("data-style-disabled", "true");
    }

    toggleButton.addEventListener("click", function () {
        if (html.hasAttribute("data-style-disabled")) {
            html.removeAttribute("data-style-disabled");
            localStorage.setItem("overrideStyle", "true");
        } else {
            html.setAttribute("data-style-disabled", "true");

            // Force reset by removing ALL overridden styles
            document.documentElement.style = "";
            localStorage.setItem("overrideStyle", "false");
        }
    });
});
