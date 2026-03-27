//Captura

let btnCalcular=document.querySelector("#calcularPromedio")
let form=document.querySelector("#form")
//Modificacion
btnCalcular.addEventListener("click",(e)=>{
    e.preventDefault()
    let nombre=document.querySelector("#nombre").value
    let nota1=parseFloat(document.querySelector("#nota1").value)
    let nota2=parseFloat(document.querySelector("#nota2").value)
    let nota3=parseFloat(document.querySelector("#nota3").value)
    let promedio=(nota1+nota2+nota3)/3
    let span=document.createElement("span")
    span.textContent=` Alumno : ${nombre} ${promedio}`
    return form.appendChild(span)
    
})

//Test
console.log(btnCalcular)