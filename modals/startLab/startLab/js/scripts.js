const openButton = document.querySelector("#openButton"); //open button
const dialogBox = document.querySelector("#dialogBox"); //dialog box
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () =>{
    dialogBox.showModal(); //show dialog
    dialogBoxText.innerHTML = "One Apple contains 95 calories"
});

openButton2.addEventListener("click", () =>{
    dialogBox.showModal(); //show dialog
    dialogBoxText.innerHTML = "One Orange contains 45 calories"
});

openButton3.addEventListener("click", () =>{
    dialogBox.showModal(); //show dialog
    dialogBoxText.innerHTML = "One Bannana contains 105 calories"
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});