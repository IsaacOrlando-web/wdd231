const memberName = document.getElementById('member-name');
const memberEmail = document.getElementById('member-email');
const memberPhone = document.getElementById('member-phone');

//url Information
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

//get the info from url
const name = `${searchParams.get('firstName')} ${searchParams.get('lastName')}`;
const email = searchParams.get('email');
const phone = searchParams.get('phone');

//add into html
memberName.textContent = name;
memberEmail.textContent = email;
memberPhone.textContent = phone;