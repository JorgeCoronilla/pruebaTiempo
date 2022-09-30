/*Elabora un programa que permita averiguar si una persona debe sacar su CUIL, 
sabiendo su fecha de nacimiento. El Código Único de Identificación Laboral (CUIL)
es el número que se otorga a todo trabajador al inicio de su actividad laboral en relación
de dependencia (mayores de 17 años) que pertenezca al Sistema Integrado de Jubilaciones
y Pensiones (SIJP), y a toda otra persona que gestione alguna prestación o servicio
de la Seguridad Social en la República Argentina.

Nota:   Se debe comparar con la fecha actual y no tener en cuenta los años bisiestos.*/

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31 ];
const currentday = 30, currentMonth=9;currentyear =2022;

function input() {
    var dayUser = parseInt(document.getElementById('day').value);
    var monthUser = parseInt(document.getElementById('month').value);
    var yearUser = parseInt(document.getElementById('year').value);
    
           if (calEdad (dayUser, monthUser, yearUser)){
            document.querySelector('p').innerText="Usted debe solicitar su CUIL";
        } else {
            document.querySelector('p').innerText="Todavía no debe solicitar su CUIL";
        };
}

function calEdad (day, month, year){
    var daysAge;

    //Días en el mes de nacimiento
    daysAge = months[month-1]-day;

    //Días en el mes actual
    daysAge = currentday;

    // Días en el año de nacimiento
    for (let i= month; i<12;i++){
        daysAge += months[i];
    }
    // Días en el año actual
    for (let i=(currentMonth-2);i>=0;i--){
        daysAge += months[i];
    }
    // Días en los años intermedios
    daysAge += (currentyear-year-1)*365;

    return daysAge>=(365*17);
} 