const images = document.querySelectorAll(".images .img-container .image")
const fullPhoto = document.querySelector(".full-photo")


function closeFullPhoto() {
    fullPhoto.classList.remove("open")
}

function openFullPhoto(src) {
    const img = fullPhoto.querySelector(".content img")
    img.setAttribute("src", src)
    fullPhoto.classList.add("open")

}
function imageClick(image) {
    const imgTag = image.querySelector("img")
    const imageSrc = imgTag.getAttribute("src")
    openFullPhoto(imageSrc)
}

const closeBtn = fullPhoto.querySelector(".close-button")
closeBtn.onclick = closeFullPhoto

fullPhoto.onclick = closeFullPhoto
document.body.onkeydown = (event) => {
    // zavrit pri zmacknuti ESC
    if (event.keyCode == 27) closeFullPhoto()
}

for (const image of images) {

    image.addEventListener("click", () => {
        imageClick(image)
    })
}
