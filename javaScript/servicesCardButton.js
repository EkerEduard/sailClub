let servicesViewButtonGrid = document.querySelector('.services-view-button-grid');
let servicsViewButtonList = document.querySelector('.services-view-button-list');
let cardsList = document.querySelector('.services-card-list');

servicesViewButtonGrid.onclick = function () {
    cardsList.classList.remove('list');
    servicsViewButtonList.classList.remove('active');
    servicesViewButtonGrid.classList.add('active');
};

servicsViewButtonList.onclick = function () {
    cardsList.classList.add('list');
    servicsViewButtonList.classList.add('active');
    servicesViewButtonGrid.classList.remove('active');
};