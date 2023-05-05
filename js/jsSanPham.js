function changeImage(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('math-img').setAttribute('src', imagePath);
}
function changeImage(idOrPath) {
    let imagePath;
    if (idOrPath.includes('/')) {
        // If idOrPath contains a '/', assume it is a path and use it directly
        imagePath = idOrPath;
    } else {
        // Otherwise, assume it is an id and get the path from the corresponding image element
        imagePath = document.getElementById(idOrPath).getAttribute('src');
    }
    document.getElementById('math-img').setAttribute('src', imagePath);
}


function showDescription() {
    document.getElementById("product-description").style.display = "block";
    document.getElementById("product-reviews").style.display = "none";
}

function showReviews() {
    document.getElementById("product-description").style.display = "none";
    document.getElementById("product-reviews").style.display = "block";
}



