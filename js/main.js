const closeBtn = document.querySelector('.close');
const images = document.querySelector('.images');

const zoomImageModal = document.querySelector('.zoom-images');
const zoomImage = document.querySelector('.zoom-image');

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const imageArray = [...images.getElementsByTagName('img')];


// imageArray.forEach(image => {
//     console.log(image.src)
// });
// currentSrc

const image = {
    showModal() {
        zoomImageModal.style.display = "block";
    },

    hideModal() {
        zoomImageModal.style.display = "none";

    },

    zoom(el) {
        const imageSrc = el.target.src;
        if (imageSrc) {
            const foundImage = imageArray.find(image => image.src == imageSrc).src;
            zoomImage.src = foundImage;
            this.showModal();
        }
    },

    next(){

    }
}

images.addEventListener('click', (e) => { image.zoom(e) })
closeBtn.addEventListener('click', function () { image.hideModal() });
document.addEventListener('keydown', function (e) { e.code == "Escape" ? image.hideModal() : null; });
