// <!-- JS MODAL CART -->
const cart = document.querySelector('.js-shopping-cart')
const modalCart = document.querySelector('.js-modal-cart')
const modalCloseCart = document.querySelector('.js-modal-close-cart')

// Open modal
function openCart() {
    modalCart.classList.add('open-modal')
}

// Close modal
function closeCart() {
    modalCart.classList.remove('open-modal')
}
        
// Click -> open modal 
cart.addEventListener('click', openCart)
        
// Click X or Click out-side
modalCloseCart.addEventListener('click', closeCart)
modalCart.addEventListener('click', closeCart)

// <!-- Nhan Mua -> Open Modal Dien Thong Tin -->

const clickBuy = document.querySelector(".js-buy")

function closeCartAndOpenMoDalBuy() {
    modalCart.classList.remove('open-modal')
    alert("Mời Điền Thông Tin")
}

clickBuy.addEventListener('click', closeCartAndOpenMoDalBuy)