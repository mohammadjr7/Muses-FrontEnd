/* Document elemetns */
// Search Form
let formSearch = document.getElementById("search-form");
// Textboxes
let textboxArtist = document.getElementById("artist");
let textboxSong = document.getElementById("song");
let errorBoxSong = document.getElementById("song-errorbox");
let errorBoxArtist = document.getElementById("artist-errorbox");
// Form Button
let btnSearch = document.getElementById("btn-search");

// Check textboxes validity
function searchSubmit() {
    if (textboxArtist.value.trim().length != 0 &&
        textboxSong.value.trim().length != 0) {
            btnSearch['type'] = "submit";
        } else {
            btnSearch['type'] = "button";
        }
}
// Check artist input validity
function checkArtistInput() {
    if (textboxArtist.value.trim().length == 0) {
        textboxArtist.classList.add("error");
        errorBoxArtist.classList.remove("hidden");
        setErrorMessage("Artist name connot be empty.", errorBoxArtist)
    } else {
        textboxArtist.classList.remove("error");
        errorBoxArtist.classList.add("hidden");
    }
}
// Check song input validity
function checkSongInput() {
    if (textboxSong.value.trim().length == 0) {
        textboxSong.classList.add("error");
        errorBoxSong.classList.remove("hidden");
        setErrorMessage("Song name connot be empty.", errorBoxSong)
    } else {
        textboxSong.classList.remove("error");
        errorBoxSong.classList.add("hidden");
    }
}
// Set error message for error textbox
function setErrorMessage(message, errorBox) {
    errorBox.childNodes[1].textContent = message;
}