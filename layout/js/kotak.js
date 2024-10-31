const mycanvas = document.querySelector('£mycanvas');
//atur canvas/window
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;
const r = mycanvas.getContext('2d');
let kotak = 1;
r.fillStyle = 'red';

// Product
function ShowProduct() {
    var features = document.getElementById("Features");
    features.classList.remove("hidden");  
    const FiturHover = document.getElementById("fitur")
    FiturHover.style.color = 'white'
    const FiturRotate = document.getElementById("fitur2")
    FiturRotate.classList.add("hidden")
    const FiturUp = document.getElementById("fitur3")
    FiturUp.classList.remove('hidden')
}
function HideProduct() {
    var features = document.getElementById("Features");
    features.classList.add("hidden");  
    const FiturHover = document.getElementById("fitur")
    FiturHover.style.color = ''
    const FiturRotate = document.getElementById("fitur2")
    FiturRotate.classList.remove("hidden")
    const FiturUp = document.getElementById("fitur3")
    FiturUp.classList.add('hidden')
}

// Resources
function ShowResources() {
    var features = document.getElementById("Resources");
    features.classList.remove("hidden"); 
    const FiturHover = document.getElementById("reasources")
    FiturHover.style.color = 'white'
    const FiturRotate = document.getElementById("reasources1")
    FiturRotate.classList.add("hidden")
    const FiturUp = document.getElementById("reasources2")
    FiturUp.classList.remove('hidden')
}
function HideResources() {
    var features = document.getElementById("Resources");
    features.classList.add("hidden");  
    const FiturHover = document.getElementById("reasources")
    FiturHover.style.color = ''
    const FiturRotate = document.getElementById("reasources1")
    FiturRotate.classList.remove("hidden")
    const FiturUp = document.getElementById("reasources2")
    FiturUp.classList.add('hidden')
}

//Arrow
function Arrow() {
    const arrow = document.getElementById("arrow")
    arrow.classList.add("pl-3")
}

function ArrowOf() {
    const arrow = document.getElementById("arrow")
    arrow.classList.remove("pl-3")
}

//PopUp
function popUp() {
    const PopUp = document.getElementById("popUpSignIn")
    PopUp.classList.remove("hidden")
}

function popUpClose() {
    const PopUp = document.getElementById("popUpSignIn")
    PopUp.classList.add("hidden")
    console.log('hidden added')
}

window.addEventListener("click", function (event) {
    const popUp = document.getElementById("popUpSignIn");
    console.log('hidden added 2')
    // Jika popup terlihat dan klik terjadi di luar popup, popup akan ditutup
    if (!popUp.classList.contains("hidden") && !popUp.contains(event.target)) {
        popUpClose();
    }
});

