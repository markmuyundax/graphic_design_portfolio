const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.close-lightbox');
const mediaItems = document.querySelectorAll('.media-item img, .media-item video');

mediaItems.forEach(item => {
    item.addEventListener('click', (e) => {
        lightboxImg.classList.remove('active');
        lightboxVideo.classList.remove('active');
        lightboxVideo.pause();

        if (item.tagName === 'IMG') {
            lightboxImg.src = item.src;
            lightboxImg.classList.add('active');
        } else if (item.tagName === 'VIDEO') {
            lightboxVideo.src = item.src;
            lightboxVideo.classList.add('active');
            lightboxVideo.play();
        }
        
        lightbox.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
    }
});
