const requestServicesForm = document.getElementById("requestServicesForm");
const requestServicesCheckbox = document.getElementById("requestServicesCheckbox");

requestServicesCheckbox.addEventListener("click", function() {
    let hidden = requestServicesForm.getAttribute("hidden");

    if (hidden) {
        requestServicesForm.removeAttribute("hidden");
    } else {
        requestServicesForm.setAttribute("hidden", "hidden");
    }
});