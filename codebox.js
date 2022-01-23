const menuBtn = document.querySelector('.navbar-toggler');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = open;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false
    }
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let btn = document.querySelector('.btn-submit')

form.addEventListener('submit', ()=> {
	preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



let swich = document.getElementById("swich")
let fas = document.querySelector(".fas")
let btnP = document.querySelector(".btn-p")
let isTurnedOff = 1; 

swich.addEventListener('click', () => {
    if (isTurnedOff) {
		btnP.style.color = ('#1DD1A1')
        fas.classList.remove('fa-toggle-off')
        fas.classList.add('fa-toggle-on')
        isTurnedOff = 0;
        console.log(isTurnedOff);
    } else {
		btnP.style.color = ('#333')
        fas.classList.remove('fa-toggle-on')
        fas.classList.add('fa-toggle-off')
        isTurnedOff = 1;
        console.log(isTurnedOff);
    };
})












// // // SOCIAL PANEL JS
// // const floating_btn = document.querySelector('.floating-btn');
// // const close_btn = document.querySelector('.close-btn');
// // const social_panel_container = document.querySelector('.social-panel-container');

// // floating_btn.addEventListener('click', () => {
// // 	social_panel_container.classList.toggle('visible')
// // });

// // close_btn.addEventListener('click', () => {
// // 	social_panel_container.classList.remove('visible')
// // });