var imgList = Array.from(document.querySelectorAll('.item img'));
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#prev');


function nextSlide() {
    indexImg++;
    if (indexImg == imgList.length) {
        indexImg = 0;
    }
    var imgSrc = imgList[indexImg].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
function prevSlide() {
    indexImg--;
    if (indexImg < 0) {
        indexImg = imgList.length - 1;
    }
    var imgSrc = imgList[indexImg].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        nextSlide(1)
    } else if (e.key == 'ArrowLeft') {
        prevSlide(-1)
    }
})

document.getElementById('search-icon').addEventListener('click', function () {
    document.getElementById('search-input').focus();
});



const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('close-input-search');
const closeIcon = document.getElementById('close-icon');

searchIcon.addEventListener('click', (event) => {
    event.preventDefault();
    searchContainer.classList.remove('d-none');
});

closeIcon.addEventListener('click', () => {
    searchContainer.classList.add('d-none');
});


