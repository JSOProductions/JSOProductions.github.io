


let passInput = document.querySelector("input[name='password']");
passInput.addEventListener("change", rangeCheck);
const ss = document.getElementById("hide");
let message = document.getElementById('Message')
let inputField = document.getElementById('password')

function rangeCheck() {
	
    // In a DOM event handler, you can just use "this" as a reference
    // to the DOM element that triggered the event.
    var Num = this.value;
    // Just test for the bad values and act accordingly
    if (Num == 279596) {
		message.classList.remove('hide');
		inputField.classList.add('hide');
    }
	else {
		message.classList.add('hide');
		inputField.classList.remove('hide');
	}
}

/*function runAuth() {
	let pass = document.getElementById('password')
	let message = document.getElementById('Message')
	if (pass == "Fifi596") {
		message.classList.remove('hide');
	}
	else {
		message.classList.add('hide');
	}
}*/