window.addEventListener('DOMContentLoaded', (event) => {
    
    let container = document.createElement()

    console.log('It worked');
    let btn = document.createElement('Button')
    btn.innerHTML = "Add Square";
    document.body.appendChild(btn);

    btn.addEventListener('click', (event) => {
        console.log("button clicked");
        //let div = document.createElement("div");
        //document.body.appendChild(div);
        let square = document.createElement ("div")
        square.className = 'square';
        document.body.appendChild(square);
        

    })

   
});

