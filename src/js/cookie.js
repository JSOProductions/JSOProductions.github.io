function setMode(mode) {
	const stylesheet = document.getElementById("cookieMode");
	var mode = document.getElementById("change");
	
	if (mode.checked == true) {
		stylesheet.href = "./src/css/darkmode.css";
	}
	else if (mode.checked == false) {
		stylesheet.href = "./src/css/lightmode.css";
	}
	// Save the mode value in a cookie
	document.cookie = `mode=${mode}; path=/`;
}

function checkModeCookie() {
	const cookieValue = document.cookie
	.split('; ')
    .find(row => row.startsWith('mode='))
    ?.split('=')[1];

	if (cookieValue) {
		setMode(cookieValue);
	}
}

checkModeCookie();