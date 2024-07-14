const images = document.querySelectorAll(".section .img-container .images")
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

for (const image of images) {
    // přiřadit onClick
    image.addEventListener("click", () => {
        imageClick(image)
    })
}
