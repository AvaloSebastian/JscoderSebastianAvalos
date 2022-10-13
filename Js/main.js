alert("Bienvenido!")
let consultaDoctores = prompt("¿De que área desea consultar horario?");

let ginecologia = "Atiende de Lunes a Viernes de 8:00 am hasta 11:00 am"
let medicoClinico = "Atiende Martes y Jueves de 10:00 am hasta 15:00 pm"
let traumatologia = "Atiende Lunes, Miercoles y Viernes de 8:00 am hasta 16:00 pm"
while(consultaDoctores != "ESC"){
    switch (consultaDoctores){
        case "ginecologia":
            alert(ginecologia);
            break;
        case "medico clinico":
            alert(medicoClinico);
            break;
        case "traumatologia":
            alert(traumatologia)
            break;
        default:
            alert("Por el momento no contamos con esa especializacion")
            break;            
    }
    break
}
let preguntaAbonar = prompt("¿Desea abonar un turno?")
 while( preguntaAbonar != "si"){
   alert("Puede contactarnos por cualquier otra cosulta, hasta luego");
     break; 

    }


















