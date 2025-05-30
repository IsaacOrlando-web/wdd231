//cards buttons
const goldBtn = document.querySelector("#gold button");
const silverBtn = document.querySelector("#silver button");
const bronzeBtn = document.querySelector("#bronze button");
const npBtn = document.querySelector("#non button");
//dialogs
const dialogGold = document.getElementById("goldDialog");
const dialogSilver = document.getElementById("silverDialog");
const dialogBronze = document.getElementById("bronzeDialog");
const dialogNp = document.getElementById("nonprofitDialog");
//close Dialogs buttons
const goldClose = document.querySelector("#goldDialog button");
const silverClose = document.querySelector("#silverDialog button");
const bronzeClose = document.querySelector("#bronzeDialog button");
const nonProfitClose = document.querySelector("#nonprofitDialog button")

//open and close dialog functions
//gold
goldBtn.addEventListener("click", () => dialogGold.showModal());
goldClose.addEventListener("click", () => dialogGold.close());

//silver
silverBtn.addEventListener("click", () => dialogSilver.showModal());
silverClose.addEventListener("click", () => dialogSilver.close());

//bronze
bronzeBtn.addEventListener("click", () => dialogBronze.showModal());
bronzeClose.addEventListener("click", () => dialogBronze.close());

//Non profit
npBtn.addEventListener("click", () => dialogNp.showModal());
nonProfitClose.addEventListener("click", () => dialogNp.close());