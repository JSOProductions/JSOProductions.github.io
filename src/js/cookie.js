function setMode(mode) {
	const stylesheet = document.getElementById("cookieMode");
	if (mode === 'dark') {
		stylesheet.href = "./src/css/darkmode.css";
	} 
	else if (mode === 'light') {
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