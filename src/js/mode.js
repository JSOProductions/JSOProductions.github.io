function mode() {
 
	/* Variables */
	const stylesheet = document.getElementById("cookieMode");
	var mode = document.getElementById("change");
	
	/* Action */
	if (mode.checked == true) {
        stylesheet.href = "./src/css/darkmode.css";
    }
    else if (mode.checked == false) {
        stylesheet.href = "./src/css/lightmode.css";
    }
}