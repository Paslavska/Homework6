var a, b, c, x1, x2;

a = prompt("Enter a: ");
b = prompt("Enter b: ");
c = prompt("Enter c: ");

var d = b * b - 4 * a * c;
x1 = (b*(-1) + Math.sqrt(d)) / (2 * a);
x2 = (b*(-1) - Math.sqrt(d)) / (2 * a);

alert("x1= " + x1 + "x2= " + x2 + "d= " + Math.sqrt(d));