/*Array for the gallery image numbers*/
const gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const thumbWords = ["Pensive Mojo", "Mojo on a Keyboard", "Sassy Hemet", "Found Hopper", "Pond Hopper", "Roadside Hopper", "Punk Hemet", "Frog Bellies", "Frog Belly", "A Friend, A Seat", "Release Me", "Baby Mojo", "Obey the Frog", "Hot New Album"]
/*Empty array to push the image divs to*/
const thumbnail = []

const $gallery = document.querySelector(".gallery");

/*Using the arrays to create the thumbnail images*/
for (const imageNum of gallery) {
    thumbnail.push(`<div class="thumbnail"><img tabindex="0" id="${imageNum}" src="./images/image_${imageNum}.jpg" alt="Frog Photo #${imageNum}"><p>${thumbWords[imageNum-1]}</p></div>`);
}

const $overlay = document.querySelector(".overlay");

$gallery.addEventListener('click', function (e) {
    imageThumb = event.target.closest('.thumbnail');
    /*Retrieving image source attribute*/
    const imageSrc = event.target.closest('img').src;
    const imageId = event.target.closest('img').id;
    const overlayImage = []

    /*If an image thumbnail is clicked, open the overlay*/
    if (imageThumb) {
        $overlay.style.display = "block";
        /*Push div onto overlay based on clicked image*/
        overlayImage.push(`<div class="photo"><h2>${thumbWords[imageId-1]}</h2><img id="${imageId}" src="${imageSrc}"></div>`);
    }
    $overlay.innerHTML = overlayImage.join("");
})

/*If the Enter Key is pressed, treat focused image as if it was Clicked*/
document.addEventListener('keydown', function(e) {
        const imageFocus = document.activeElement.id;
        if (e.key === "Enter") {    
            document.getElementById(`${imageFocus}`).click(); 
        }
    });

/*If the Overlay is clicked, dismiss the overlay*/
$overlay.addEventListener('click', function (e) {
    if ($overlay) {
        $overlay.style.display = "none";
    }
})

/*If the Escape key is pressed down, dismiss the overlay*/
document.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
        $overlay.style.display = "none";
    }
})


$gallery.innerHTML = thumbnail.join("");
