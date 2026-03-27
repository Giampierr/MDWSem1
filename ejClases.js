//Ingreso de Notas
let notas=[]
let nombre =prompt("Ingrese el nombre del alumno :")
function ingresarNotas(){
    
    let cantidad=prompt("¿Cuantas notas va a ingresar ?:")
    for(i=0;i<cantidad;i++){
        let nota=prompt("Ingrese la nota :")
        notas.push(nota)
    }
    return notas
}

//Evaluacion
let promedio=0
function calcularPromedio(notas){
    let suma=0
    let cantidad=0
    for(i=0;i<=notas.lenght;i++){
        suma+=notas[i]
        cantidad++

    }
    promedio=suma/cantidad
    return promedio
}

//EVALUAR
function evaluarPase(promedio){
    if (promedio>=11.5) {
        return console.log("El estudiantes aprobo")
    } else {
        return console.log("El estudiantes desaprobo")
    }
}
//TEST
ingresarNotas()
notas.forEach(element => {
    console.log(element)
});

console.log(calcularPromedio(notas))
let pantalla=document.querySelector("form")
let mensaje=document.textContent(`Alumno :${nombre} Promedio:${calcularPromedio(notas)} ${evaluarPase(promedio)}`)
pantalla.innerHTML(mensaje)