/* Document elemetns */
let toastShadowContainer = document.getElementById("toast-shadow-container")
let toastContainer = document.getElementById("toast-container")
let toast = document.getElementById("toast")
let btnCloseToast = document.getElementById("btn-close-toast")
let messageToast = document.getElementById("toast-message")

// Show toast method
function showToast(message, type) {
    if (toastShadowContainer.classList.contains("hidden")) {toastShadowContainer.classList.remove("hidden");}
    
    setTimeout(()=> {
        if (toastShadowContainer.classList.contains("toast-container-hide")) {
            toastShadowContainer.classList.remove("toast-container-hide");
            toastShadowContainer.classList.add("toast-container-show");
            if (message) {
                messageToast.textContent = message;
            }
            switch (type) {
                case "error": {
                    toast.classList.remove("toast-green");
                    toast.classList.remove("toast-primary");
                    toast.classList.add("toast-red");
                    break;
                }
                case "success": {
                    toast.classList.remove("toast-red");
                    toast.classList.remove("toast-primary");
                    toast.classList.add("toast-green");
                    break;
                }
                case "warining": {
                    toast.classList.remove("toast-green");
                    toast.classList.remove("toast-primary");
                    toast.classList.remove("toast-red");
                    break;
                }
                case "primary": {
                    toast.classList.remove("toast-green");
                    toast.classList.remove("toast-red");
                    toast.classList.add("toast-primary");
                    break;
                }
                default: {
                    break;
                }
            }
        } else {
            closeToast();
        }
    }, 25);
}

// Close toast method
function closeToast() {
    if (toastShadowContainer.classList.contains("toast-container-show")) {
        toastShadowContainer.classList.remove("toast-container-show");
        toastShadowContainer.classList.add("toast-container-hide");
        setTimeout(()=> {
            if (!toastShadowContainer.classList.contains("hidden")) {toastShadowContainer.classList.add("hidden")}
        }, 250);
    }
}

