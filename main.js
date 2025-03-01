var tabla = new Array (10);
tabla[0] = ["000A","070","Vivaldi 4 Estaciones","6373","Musical"]
tabla[1] = ["0001","071","ABBA GOLD","3243","Musical"]
tabla[2] = ["0002","071","La Mona Lisa","353445","Pictorica"]
tabla[3] = ["0003","072","David MiguelAngel","234234","Escultorica"]
tabla[4] = ["0004","072","9a Sinfonia Bettoven","847446","Musical"]
tabla[5] = ["0005","073","El Quijote","40000","Literaria"]
tabla[6] = ["0006","073","La Celestina","32344","Literaria"]
tabla[7] = ["0007","074","Las Meninas","194000","Pictorica"]
tabla[8] = ["0008","074","Disco Bee Gees","345536","Musical"]
tabla[9] = ["0009","074","Mohai","32070","Escultorica"]


function f_buscarNUM(){

var sumador = 0
var numOBRA = document.getElementById("buscarNUMOBRA").value;

while ( tabla[sumador][0] !=  numOBRA && sumador < tabla.length ){
sumador++;
}

if (tabla[sumador][0] == numOBRA){

document.getElementById("RnumObra").innerHTML += tabla[sumador][0]+"\n";
document.getElementById("Rlote").innerHTML += tabla[sumador][1]+"\n";
document.getElementById("Rnombre").innerHTML += tabla[sumador][2]+"\n";
document.getElementById("Rpreciosal").innerHTML += tabla[sumador][3]+"\n";
document.getElementById("Rcategoria").innerHTML += tabla[sumador][4]+"\n";

}



}


