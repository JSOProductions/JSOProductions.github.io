function mode() {
 
	/* Variables */
	const stylesheet = document.getElementById("darkMode");
	var changeVar = document.getElementById("change");
	var cvalue = document.getElementById("change");
	var cname = "mode"
	
	/* Date */
	const d = new Date();
	d.setTime(d.getTime() + (100*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	
	/* Action */
	if (changeVar.checked == true) {
		stylesheet.href = "./src/darkmode.css";
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	} else {
		stylesheet.href = "./src/lightmode.css";
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
}