document.addEventListener("DOMContentLoaded", function() {
    let container = document.createElement("div");
    container.className = "bodycontainer";
    document.body.appendChild(container);

    let addsquarebutton = document.createElement("button");
    addsquarebutton.className = "addButton"
    document.body.appendChild(addsquarebutton);
    addsquarebutton.innerHTML = "Add Square"



    addsquarebutton.addEventListener("click", function() {
        console.log("It worked")
        let squareContainer = document.createElement("div")
        squareContainer.className = "square"
        document.body.appendChild(squareContainer);
    })
})
