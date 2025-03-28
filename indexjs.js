let nameShip = prompt("Digite um nome para sua nave")

let velocityShip = 0

let chosenOption

function showMenu() {
	let option
	while (option != "1" && option != "2" && option != "3" && option != "4") {
		option = prompt("O que deseja fazer?\n" +
			"1- Acelerar a nave \n" +
			"2 - desacelerar a nave\n" +
			"3 - Imprimir dados de bordo\n" +
			"4 - Sair do programa\n")
	}
	return option
}

function speedUp() {
	newVelocity = velocityShip + 5
	return newVelocity
}

function speedDown() {
	newVelocity = velocityShip - 5
	if (newVelocity <= 0) {
		newVelocity = 0
	}
	return newVelocity
}

function showMenuShip(name, velocityShipShow) {
	alert("A nave " + name +
		"\n Esta a " + velocityShipShow + "km/s")
}

while (chosenOption != 4) {
	chosenOption = showMenu()
	switch (chosenOption) {
		case "1":
			velocityShip = speedUp()
			break
		case "2":
			velocityShip = speedDown()
			break
		case "3":
			showMenuShip(nameShip, velocityShip)
			break
		case "4":
			alert("Fim do programa")
	}
}