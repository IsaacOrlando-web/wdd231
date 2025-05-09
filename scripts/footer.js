const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = new Date().getFullYear();

const lastMo = document.querySelector("#lastModified");
lastMo.innerHTML = document.lastModified;