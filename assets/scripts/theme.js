/* Theme consonants */
const light = "light";
const dark = "dark";
/* Document elemetns */
let body = document.getElementById("body");
let logoText = document.getElementById("muses-logo-text");
let logoStroke = document.getElementById("muses-logo-stroke");
let btnChangeTheme = document.getElementById("btn-theme-change");

// Get Theme preferences from user's LocalStorage
let theme = localStorage.getItem("theme") || light;
// Set Theme preferences to user's LocalStorage
localStorage.setItem("theme", theme)


// Set Theme preferences to dark (if=> theme===dark)
if (theme === dark) {
    body.classList.add(theme);
    logoText.classList.add(theme);
    logoStroke.classList.add(theme);
}

// Set Theme preferences for user when theme button clicked
btnChangeTheme.onclick = applyTheme;
function applyTheme() {
    body.classList.toggle(dark);
    logoText.classList.toggle(dark);
    logoStroke.classList.toggle(dark);

    
    // Set Theme preferences to localStorage
    if (body.classList.contains(dark)) {localStorage.setItem("theme", dark)}
    if (!body.classList.contains(dark)) {localStorage.setItem("theme", light)}
}