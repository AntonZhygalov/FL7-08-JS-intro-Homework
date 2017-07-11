var a = prompt("Vvedit a",);
var b = prompt("Vvedit b",);
var c = prompt("Vvedit c",);

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

var d = Math.pow(b, 2)-4*a*c;

var res1 = (-b+Math.sqrt(d))/(2*a);
var res2 = (-b-Math.sqrt(d))/(2*a);

console.log("Рівняння " + a +"x^2 + " + b + "x + " + c + " = 0 має 2 розв’язки: x1 = " + res1 + ", x2 = " + res2);