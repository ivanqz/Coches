//Pedir el nombre
var nombre =prompt('Escribe tu nombre:');
document.write (`Tu nombre es: ${nombre}`);

//Pedir marcas de coche que ha tenido
var coches =['Opel','Renoult', 'Hyundai'];

var Coches =prompt('Dime 3 marcas de coche que has tenido:');

function marcasCoche(coches){
    document.write (`Este ha sido uno de tus coches, ${coches}`);
}