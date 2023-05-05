const btnBuys = document.querySelectorAll('.js-btn-buy')
const modalBuy = document.querySelector('.js-modal-buy')
const modalBuyClose = document.querySelector('.js-modal-close-buy')

function openModalBuy() {
    modalBuy.classList.add('open-modal')
}

function closeModalBuy() {
    modalBuy.classList.remove('open-modal')
}

for (const btnBuy of btnBuys) {
    btnBuy.addEventListener('click', openModalBuy)
}

modalBuyClose.addEventListener('click', closeModalBuy)
modalBuy.addEventListener('click', closeModalBuy)
