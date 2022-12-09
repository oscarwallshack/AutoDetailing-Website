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
let currentZoomImage;


const image = {
    showModal() {
        zoomImageModal.style.display = "block";
    },

    hideModal() {
        zoomImageModal.style.display = "none";

    },

    zoom(el, value) {
        console.log("el" + el);
        let imageSrc = image.find(el, value);
        if (imageSrc) {
            zoomImage.src = imageSrc;
            this.showModal();
        }
    },

    find(image, value) {
        let found = imageArray.indexOf(image);
console.log(imageArray.length);

        if (found + value > imageArray.length -1 ) {
            found = 0;
        } else if (found + value == -1) {
            found = imageArray.length;
        } 

        console.log(currentZoomImage);
        currentZoomImage = imageArray[found + value];
        found = imageArray[found + value].src;
        // const found = imageArray.find((image) => {
        //     let image = image.src == imageSrc;
        // });
        return found;
    },

}

images.addEventListener('click', (e) => { image.zoom(e.target, 0) })
closeBtn.addEventListener('click', function () { image.hideModal() });
document.addEventListener('keydown', function (e) { e.code == "Escape" ? image.hideModal() : null; });
// leftArrow.addEventListener('click', ()=> image.change(-1));
rightArrow.addEventListener('click', () => { image.zoom(currentZoomImage, 1) });