const dogPhoto = document.getElementById("photo");

document.addEventListener("click", makePhotoLarge);

function makePhotoLarge() {
    dogPhoto.requestFullscreen();
}