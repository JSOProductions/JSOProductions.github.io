function mode() {
 
	/* Variables */
	const stylesheet = document.getElementById("darkMode");
	var changeVar = document.getElementById("change");
	
	/* Action */
	if (changeVar.checked == true) {
		stylesheet.href = "./src/css/darkmode.css";
	} else {
		stylesheet.href = "./src/css/lightmode.css";
	}
}