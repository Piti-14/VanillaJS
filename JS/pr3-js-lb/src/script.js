let imageName = document.querySelectorAll("img").item(0).src;

let productTitle = document.querySelector(".product-title").innerHTML;
let shoppedItemText = `¡Enhorabuena, has adquirido un espectacular ${productTitle} !`;

document.querySelectorAll("button").forEach(btn => {
    if (btn.classList.contains("button")) {
        btn.addEventListener("click", e => {
            const color = e.target.classList[1];
            const newImage = replaceColor(imageName, color);

            document.querySelectorAll("img").item(0).src = newImage;

            let secondClass = document.querySelector("h3").classList[1];
            console.log(secondClass);
            if (secondClass == null) {
                document.querySelector("h3").classList.add(color);
            } else {
                document.querySelector("h3").classList.remove(secondClass);
                document.querySelector("h3").classList.add(color);
            }
        })
    } else {
        btn.addEventListener("click", () => {
            let newProductDescription = document.createElement("div");
            newProductDescription.setAttribute("class", "product-acquired");

            let shoppedItem = document.createElement("h2");
            shoppedItem.textContent = shoppedItemText;

            newProductDescription.appendChild(shoppedItem);
            document.querySelector(".product-image").insertAdjacentElement("afterend", newProductDescription);

            document.querySelector(".product-description").remove();
        })
    }
})

function replaceColor(imageURL, newColor) {
    let hyphenIndex = imageURL.lastIndexOf("-") + 1;
    let dotIndex = imageURL.lastIndexOf(".");

    let color = imageURL.substring(hyphenIndex, dotIndex);

    let newImage = imageURL.replace(color, newColor);

    return newImage;
}