const closeBtn = document.querySelector('.close');
const images = document.querySelector('.images');

const zoomImageModal = document.querySelector('.zoom-images');
const zoomImage = document.querySelector('.zoom-image');


const image = {
    showModal() {
        zoomImageModal.style.display = "block";
    },

    hideModal() {
        zoomImageModal.style.display = "none";

    },

    zoom(el) {
        let image = el.target.src;
        if (image) {
            zoomImage.src = image;
            this.showModal();
        }
    }
}

images.addEventListener('click', (e) => { image.zoom(e) })
closeBtn.addEventListener('click', function () { image.hideModal() });