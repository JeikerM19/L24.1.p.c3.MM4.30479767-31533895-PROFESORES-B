/*En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F 
- M). 
Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
retorne el porcentaje de profesores de un sexo y una categoría dada. 
Función: porcProfesSexoEnCategoria. 
Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una 
letra). 
Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada. 
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.*/ 
let profesoresCategoria = (profesores, categoria) => {
    let profesoresCategoria = [];
    profesores.forEach((profesores) => {
        if (profesores.categoria == categoria) {
            profesoresCategoria.push(profesores);
        }
    });
    return profesoresCategoria;
}
let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let porct = 0;
    let profCategoria = profesoresCategoria(profesores, categoria);
    profCategoria.forEach((profesores) => {
        if(profesores.sexo == sexo){
            porct ++;
        }
    });
    porct = porct * ( 100 / profCategoria.length);
    return porct.toFixed(2);
}
let profesores = [
    { categoria: 1, nombre: 'Ana', sexo: 'F' },
    { categoria: 2, nombre: 'Luis', sexo: 'M' },
    { categoria: 3, nombre: 'Maria', sexo: 'F' },
    { categoria: 4, nombre: 'Pedro', sexo: 'M' },
    { categoria: 5, nombre: 'Luisa', sexo: 'F' },
    { categoria: 1, nombre: 'Juan', sexo: 'M' },
    { categoria: 1, nombre: 'Gonzo', sexo: 'M' },
    { categoria: 3, nombre: 'Roberto', sexo: 'M' },
    { categoria: 5, nombre: 'Rosa', sexo: 'F' },
];

let salida = document.getElementById("salida");

let profC1SexoM = porcProfesSexoEnCategoria(profesores, 1, "M");
let profC1SexoF = porcProfesSexoEnCategoria(profesores, 1, "F");

let profC2SexoM = porcProfesSexoEnCategoria(profesores, 2, "M");
let profC2SexoF = porcProfesSexoEnCategoria(profesores, 2, "F");

let profC3SexoM = porcProfesSexoEnCategoria(profesores, 3, "M");
let profC3SexoF = porcProfesSexoEnCategoria(profesores, 3, "F");

let profC4SexoM = porcProfesSexoEnCategoria(profesores, 4, "M");
let profC4SexoF = porcProfesSexoEnCategoria(profesores, 4, "F");

let profC5SexoM = porcProfesSexoEnCategoria(profesores, 5, "M");
let profC5SexoF = porcProfesSexoEnCategoria(profesores, 5, "F");

salida.innerHTML = `Porcentaje Masculino de Profesores tipo Instructor: ${profC1SexoM}% <br>`;
salida.innerHTML += `Porcentaje Femenino de Profesores tipo Instructor: ${profC1SexoF}% <br>`;

salida.innerHTML += `<br>Porcentaje Masculino de Profesores tipo Asistente: ${profC2SexoM}% <br>`;
salida.innerHTML += `Porcentaje Femenino de Profesores tipo Asistente: ${profC2SexoF}% <br>`;

salida.innerHTML += `<br>Porcentaje Masculino de Profesores tipo Agregado: ${profC3SexoM}% <br>`;
salida.innerHTML += `Porcentaje Femenino de Profesores tipo Agregado: ${profC3SexoF}% <br>`;

salida.innerHTML += `<br>Porcentaje Masculino de Profesores tipo Asociado: ${profC4SexoM}% <br>`;
salida.innerHTML += `Porcentaje Femenino de Profesores tipo Asociado: ${profC4SexoF}% <br>`;

salida.innerHTML += `<br>Porcentaje Masculino de Profesores tipo Titular: ${profC5SexoM}% <br>`;
salida.innerHTML += `Porcentaje Femenino de Profesores tipo Titular: ${profC5SexoF}% <br>`;


