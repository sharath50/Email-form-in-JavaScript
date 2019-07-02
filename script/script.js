// variables....

const sendBtn = document.getElementById('sendBtn'), 
	email = document.getElementById('email'),
	subject = document.getElementById('subject'),
	message = document.getElementById('message') ,
	resetBtn = document.getElementById('resetBtn'),
	sentEmailForm = document.getElementById('email-form');


// event listeners....

eventListeners();

function eventListeners() {
	// onload of the dom call this function
	document.addEventListener('DOMContentLoaded' , disableBtn );

	email.addEventListener('blur' , validateField);
	subject.addEventListener('blur' , validateField);
	message.addEventListener('blur' , validateField);
	resetBtn.addEventListener('click' , resetField);
	sentEmailForm.addEventListener('submit' , sendMail);
}



// functions........

function disableBtn() {
	// disables the send button on load
	sendBtn.disabled = true;
}

// sending the mail
function sendMail(e) {
	e.preventDefault();

	const spinner = document.querySelector('#spinner');
	spinner.style.display = "block";

	setTimeout( function() {
		spinner.style.display = "none";

		let sentMailImg = document.createElement('img');
		sentMailImg.src = 'img/mail.gif';
		sentMailImg.style.display = "block";

		document.getElementById('loaders').appendChild(sentMailImg);

		setTimeout( function() {
			sentMailImg.style.display = "none";
		} , 5000 );

	} , 3000 );
}

function validateField() {
	let errors;

	// validate the length of the field
	validateLength(this);

	//validate email form
	if (this.type === "email") {
		validateEmail(this);
	}

	// check is there any errors in the entire DOM
	errors = document.querySelectorAll('.error');

	//check whether all the fields are filled or empty
	if (email.value !== "" && subject.value !== "" && message.value !== "") {
		if (errors.length === 0) {
			sendBtn.disabled = false;
		}
	}
}

function validateLength(field) {
	if (field.value.length > 0) {
		field.style.borderColor = "green";
		field.classList.remove('error');
	} else {
		field.style.borderColor = "red";
		field.classList.add('error');
	}
}


// validating email wheather it is has '@' sign or not
function validateEmail(field) {
	let emailText = field.value;
	if (emailText.indexOf('@') !== -1 ) {
		field.style.borderColor = "green";
		field.classList.remove('error');
	} else {
		field.style.borderColor = "red";
		field.classList.add('error');
	}
}

//
function resetField (){
	sentEmailForm.reset();
	sendBtn.disabled = true;
}








