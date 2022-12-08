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

    zoom(el, value = 0) {
        console.log('el: ' + el);
        let imageSrc = image.find(el, value);
        if (imageSrc) {
            zoomImage.src = imageSrc;
            this.showModal();
        }
    },

    find(imageSrc, value) {

        console.log('imagescr: '+ imageSrc + ' value: ' + value);
        let found = imageArray.indexOf(imageSrc);
        console.log(found);
        found = imageArray[found + 1].src;

        // const found = imageArray.find((image) => {
        //     let image = image.src == imageSrc;
        // });
        console.log('found: ' + found)
        return found;
    },

}

images.addEventListener('click', (e) => { image.zoom(e.target) })
closeBtn.addEventListener('click', function () { image.hideModal() });
document.addEventListener('keydown', function (e) { e.code == "Escape" ? image.hideModal() : null; });
// leftArrow.addEventListener('click', ()=> image.change(-1));
rightArrow.addEventListener('click', () => image.zoom(zoomImage, 1));
