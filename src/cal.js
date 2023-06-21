function clearScreen() {
    document.getElementById("result").value = "";
}
 
 
function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function deleteLast() {
	result.value = result.value.slice(0,-1);
}

window.onkeydown = function (e) {
	if (!e) e = window.event;
	if (e.key == 0){display(0) (result == 0)}
	if (e.key == 1){display(1) (result == 1)}
	if (e.key == 2){display(2) (result == 2)}
	if (e.key == 3){display(3) (result == 3)}
	if (e.key == 4){display(4) (result == 4)}
	if (e.key == 5){display(5) (result == 5)}
	if (e.key == 6){display(6) (result == 6)}
	if (e.key == 7){display(7) (result == 7)}
	if (e.key == 8){display(8) (result == 8)}
	if (e.key == 9){display(9) (result == 9)}
	if (e.key == '+'){display('+') (result == '+')}
	if (e.key == '/'){display('/') (result == '/')}
	if (e.key == '-'){display('-') (result == '-')}
	if (e.key == '*'){display('*') (result == '*')}
	if (e.key == '.'){display('.') (result == '.')}
	if (e.key == 'Enter' || e.key == '='){(calculate())}
	if (e.key == 'c'){clearScreen()}
	if (e.key == 'Backspace'){deleteLast()}
}