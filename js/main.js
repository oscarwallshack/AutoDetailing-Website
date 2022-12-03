const closeBtn = document.querySelector('.close');
const images = document.querySelector('.images');
const zoomImage = document.querySelector('.zoom-images');

closeBtn.addEventListener('click', function()  { zoomImage.style.display = 'none'; })