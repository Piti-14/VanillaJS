let colorButtons = document.querySelectorAll(".colors button");
let shopButton = document.querySelector("#shop-button");

colorButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        document.querySelectorAll("img").item(0).src = ;
    })
})













function replaceColor(imageURL, newColor) {
    let hyphenIndex = imageURL.lastIndexOf("-") + 1;
    let dotIndex = imageURL.lastIndexOf(".");

    let color = imageURL.substring(hyphenIndex, dotIndex);

    let newImage = imageURL.replace(color, newColor);

    return newImage;
}