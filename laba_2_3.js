let a = 2.7;
let b = -3.59;
let x = Number(prompt("Введите значение x"));
let y;

if (x > 2) {
	y = (Math.cos(a * (x ** 2))) ** 3;
} else if (x <= -1) {
	y = (Math.sin(x)) ** 2 + (b / x);
} else if ((x > -1) && (x <= 2)) {
	y = (2 - x ** 2) ** 3;
}
alert("y = " + y);
