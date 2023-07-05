let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-item a');

for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = activeImage.href;
        let currentActive = document.querySelector('.preview-item .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
};
