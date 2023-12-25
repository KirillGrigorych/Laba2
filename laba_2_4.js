let a = 2.7;
let b = -3.59;
let x = Number(prompt("Введите значение x"));
let y;

switch (x) {
	case (3):
		y = Math.cos(a * (x ** 2)) ** 3;
		break;
	case (1):
		y = (2 - x ** 2) ** 3;
		break;
	case (-1):
		y = Math.sin(x) ** 2 + b / x;
		break;
	default:
		y = "Не существует";
}
alert("y= " + y)
