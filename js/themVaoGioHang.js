const btnThem = document.querySelectorAll('.js-btn-add-product')
// console.log(btnThem)
btnThem.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h4").innerText
        var productPrice = product.querySelector("span").innerText
        addcart(productImg, productName, productPrice)
    })
})

function addcart(productImg, productName, productPrice) {
    var addDiv = document.createElement("div")
    var divContent = '<div class="body-cart-products"><div class="body-text info-product-cart" style="display: flex; align-items: center;"><img src="'+productImg+'" alt="" style="width: 110px;">'+productName+'</div><div class="body-text info-price-cart"><p><span>'+productPrice+'</span>đ</p></div><div class="body-text info-number-cart"><input style="width: 30px; outline: none;" type="number" value="1" min="1"></div><div class="body-text info-total-cart"><p><span>'+productPrice+'</span>đ</p></div><div class="body-text info-del-cart"><button class="body-text del-item-cart del">Xoa</button></div></div>'
    addDiv.innerHTML = divContent
    var cartTable = document.querySelector('.products-cart')
    cartTable.append(addDiv)
    alert("Thêm thành công!")

    delProducts()
}

// Delete Product
function delProducts() {
    var cartItems = document.querySelectorAll(".products-cart .body-cart-products")
    for (var i = 0; i < cartItems.length; i++) {
        var proDuctDel = document.querySelectorAll(".del")        
        proDuctDel[i].addEventListener("click", function(event) {
            var cartDel = event.target
            var cartItemDel = cartDel.parentElement.parentElement
            cartItemDel.remove()
        })
    }
}



