// ? Ejemplo Edad (Clase)
/*
let edad = prompt('Cual es tu edad?')

if (edad >= 18){
    alert('Sos mayor de edad');
}
else if (edad < 18){
    alert('Sos menos de edad');
}
else{
    alert('Sos inducomentado');
}
*/

// ? Desafio Clase 2
/* Remeras */
let precioRemera = prompt('Para vos, cuanto valen las remeras?');

if ((precioRemera < 650) || (precioRemera > 2300)){
    alert('No estan eso!!! Estan entre 650 pesos y 2300');
    console.log('No esta entre el rango de precio');
}
else if((precioRemera => 650) || (precioRemera <= 2300)){
    alert('Sii !! generalmente estan eso hoy en dia las remeras')
    console.log('Bien! esta en el rango de precio');
}
else{
    alert('No se que pusiste pero me exploto el cerebro.');
}

/* Short */
let precioShort = prompt('Para vos, cuanto valen los shorts?');

if ((precioShort < 700) || (precioShort > 1300)){
    alert('No estan eso!!! Los shorts estan entre 700 pesos y 1300');
    console.log('No esta entre el rango de precio');
}
else if((precioShort => 700) || (precioShort <= 1300)){
    alert('Los shorts andan por ese precio, asi es!');
    console.log('Bien! esta en el rango de precio');
}
else{
    alert('No se que pusiste pero me exploto el cerebro.');
}