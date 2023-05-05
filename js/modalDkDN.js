// <!-- JS MODAL LOG -->
const dk = document.querySelector('.js-dk')
const dn = document.querySelector('.js-dn')
const modalDK = document.querySelector('.js-modal-dk')
const modalDN = document.querySelector('.js-modal-dn')
    // Js cho cả Modal ĐN, ĐK và Buy
const modalContainers = document.querySelectorAll('.js-modal-container')
const modalCloseDK = document.querySelector('.js-modal-close-dk')
const modalCloseDN = document.querySelector('.js-modal-close-dn')

// Open modal log
    // Dang ky
function openLogDK() {
    modalDK.classList.add('open-modal')
}
    // Dang nhap
function openLogDN() {
    modalDN.classList.add('open-modal')
}

// Close modal log 
    // Dang ky
function closeLogDK() {
    modalDK.classList.remove('open-modal')
}
    // Dang Nhap
function closeLogDN() {
    modalDN.classList.remove('open-modal')
}
        
// Click Dang ky -> open modal Dang Ky
dk.addEventListener('click', openLogDK)
// Dang nhap
dn.addEventListener('click', openLogDN)
        
// Click X or Click out-side -> close modal Dang Ky
modalCloseDK.addEventListener('click', closeLogDK)
modalDK.addEventListener('click', closeLogDK)
// Click X or Click out-side -> close modal Dang Nhap
modalCloseDN.addEventListener('click', closeLogDN)
modalDN.addEventListener('click', closeLogDN)
    // Khong Noi bot khi click outside cho cả MODAL ĐN, ĐK và BUY
for (const modalContainer of modalContainers) {
    modalContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    })
}


