//Estract from thank you html

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("email");
const organizationName = document.getElementById("organizationName");
const date = document.getElementById("date");

const paramString = window.location.search;
const searchParams = new URLSearchParams(paramString);

firstName.textContent = searchParams.get("first");
lastName.textContent = searchParams.get("last");
emailAddress.textContent = searchParams.get("email");
organizationName.textContent = searchParams.get("organization-title");
date.textContent = searchParams.get("formTimestamp");