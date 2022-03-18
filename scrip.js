let nombre=prompt("Introduce tu nombre por favor");
let apellido=prompt("Ingrese el apellido");
let edad=prompt("Introduce tu edad");
let restando=prompt("Cuantos años deseas quitarte");

edad-=restando;

document.write("<p>");
document.write("Bienvenido "+ nombre+" "+apellido+"<br/>"+"Te gustaria tener "+edad+" Años");
document.write("</p>");