document.querySelector("#hobbies-number").addEventListener("input", event => {
    if(!event.target.validity.valid){
        event.target.setCustomValidity("Debes elegir un número entre 2 y 4");
    }
});