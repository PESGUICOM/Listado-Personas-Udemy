console.log("Listado de Personas");

//Esta variable que va hacer un arreglo podemos acceder a ella desde cualquier parte
const personas = [
     new Persona ("Leonel", "Messi"), 
     new Persona ("Diego", "Maradona"),
];

function mostrarPersonas(){
    console.log("Mostrar personas...");
    let texto = "";
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if (nombre.value != "" && apellido.value != ""){
    const persona = new Persona (nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona); //con esto lo mandamos al arreglo
    mostrarPersonas(); //llamamos el método para ver todos los elementos
    } else {
        console.log("No hay información que agregar");
    }
}