// let loginForm = document.getElementById("login-form")

// loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let userName = document.getElementById("exampleInputEmail1").value

//     if (userName.trim() == "") {
//         console.log("BoshBuraxmayin")
//         return;
//     } else {
//         click(userName);
//     }

// })


// function click(userName) {
//     console.log(userName);
// }


// dragElem.ondragstart = () =>{
//     console.log("Drag Olundu");
// }

// dragElem.ondragend = () =>{
//     console.log("Drag bitti");
// }

// dragElem.ondrag = () =>{
//     console.log("Drag olunur");
// }

// dragElem.ondragover = (e) =>{
//     e.preventDefault();
// }


let dragElem = document.querySelector(".box");

let dropElem = document.querySelector(".addBox");

dragElem.ondragstart = (e) =>{
    e.dataTransfer.setData("id",e.target.getAttribute("id"))
}


dropElem.ondragover = (e) =>{
    e.preventDefault();
}


dropElem.ondrop = (e) =>{
    console.log(e.dataTransfer.getData("id"))
}