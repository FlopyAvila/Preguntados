// Variables del documento (para editar el html)
let $categoria=document.getElementById("categoria")
let $pregunta=document.getElementById("pregunta")
let $botones = document.querySelectorAll('#botonRespuesta')
let $imagen=document.getElementById('imagen')
let $imagenCategoria=document.getElementById('imagenCategoria')
// Variables del juego
let contadorBien = 0
let contadorSegundos = 10 
// Invocar a contarSegundos cada 1000 ms
let correrJuego = setInterval(contarSegundos, 1000)

const pregunta1={
    pregunta:"¿En qué año murió Freddie Mercury?",
    img:"./imagenes/pregunta1.jpg",
    respuestas:["1991", "1985", "1986", "1996"],
    correcta:1,
    categoria:"cat1",
    yaSalio:false
}

const pregunta2={
    pregunta:"¿Como se llamaba el vocalista de Nirvana?",
    img: "./imagenes/pregunta2.jpg",
    respuestas:["John Lennon","Krist Novoselic","Kurt Cobain", "Curt Cobain"],
    correcta:3,
    categoria:"cat1",
    yaSalio:false
}

const pregunta3={
    pregunta:"¿De qué banda es este artista?",
    img: "./imagenes/pregunta3.jpg",
    respuestas:["Soda Stereo","The Beatles","The Police","Ciro y los persas"],
    correcta:2,
    categoria:"cat1",
    yaSalio:false
}

const pregunta4={
    pregunta:"¿Cómo sigue la canción? 'Nos conocimos bailando en un bar, tus piernas...' ",
    img: "",
    respuestas:["Se veian", "Temblaban", "Se movian", "Volaban"],
    correcta:4,
    categoria:"cat1",
    yaSalio:false
}

const pregunta5={
    pregunta:"¿Cuántas personas conforman la banda ABBA?",
    img: "",
    respuestas:["2","5","4","3"],
    correcta:3,
    categoria:"cat1",
    yaSalio:false
}

const pregunta6={
    pregunta:"¿En qué idioma cantan la banda 'Pink Floy'?",
    img: "",
    respuestas:["Español","Inglés","Italiano","Ruso"],
    correcta:2,
    categoria:"cat1",
    yaSalio:false
}

const pregunta7={
    pregunta:"¿Cómo se llama esta banda?",
    img: "",
    respuestas:["Gorillaz", "Gorillas","2d","Tranz"],
    correcta:1,
    categoria:"cat1",
    yaSalio:false
}

const pregunta8={
    pregunta:"¿Qué canción no es de Queen?",
    img: "",
    respuestas:["Killer Queen", "Ninguna", "Innuendo", "Yesterday"],
    correcta:4,
    categoria:"cat1",
    yaSalio:false
}

const pregunta9={
    pregunta:"¿Qué cancion no es de Gustavo Cerati?",
    img: "",
    respuestas:["Crimen","Adiós","Seguir viviendo sin tu amor","Cosas imposibles"],
    correcta:3,
    categoria:"cat1",
    yaSalio:false
}

const pregunta10={
    pregunta:"De quién es la canción? 'I'm on the right track, baby, I was born this way'",
    img: "",
    respuestas:["Lady Gaga","Katy Perry","Miley Cyrus","Justin Bieber"],
    correcta:1,
    categoria:"cat1",
    yaSalio:false
}

const pregunta11={
    pregunta:"¿Quién es el autor de la saga Maze Runner?",
    img: "",
    respuestas:["Alexandra Braken", "James Dashner", "Holly Black", "J. K. Rowling"],
    correcta:2,
    categoria:"cat2",
    yaSalio:false
}

const pregunta12={
    pregunta:"¿En cual de los siguientes libros la protagonista es pelirroja?",
    img: "",
    respuestas:["Hush hush", "La chica de tinta y estrellas", "Mentes Poderosas", "Caraval"],
    correcta:1,
    categoria:"cat2",
    yaSalio:false
}

const pregunta13={
    pregunta:"¿Cuál de los siguientes libros es un spin-off de una saga?",
    img: "",
    respuestas:["Todo lo que nunca fuimos", "Rojo, blanco y sangre azul", "El palacio de los Cranks", "Narnia: el sobrino del mago"],
    correcta:3,
    categoria:"cat2",
    yaSalio:false
}

const pregunta14={
    pregunta:"¿Cual de estos libros es un retelling?",
    img: "",
    respuestas:["Heartless", "La canción de Aquiles", "Anne sin filtros", "Todas las anteriores"],
    correcta:4,
    categoria:"cat2",
    yaSalio:false
}

const pregunta15={
    pregunta:"¿Quién de los siguientes autores es venezolano?",
    img: "",
    respuestas:["Gabriel Garcia Marques", "Romulo Gallegos", "Julio Cortázar", "Pablo Neruda"],
    correcta:2,
    categoria:"cat2",
    yaSalio:false
}

const pregunta16={
    pregunta:"¿Quién escribió el libro 'La divina Comedia'?",
    img: "",
    respuestas:["Homero", "Shakespeare", "Dante", "Oscar Wilde"],
    correcta:3,
    categoria:"cat2",
    yaSalio:false
}

const pregunta17={
    pregunta:"¿Cuál de los siguientes autores literarios NO escribe historias de terror?",
    img: "",
    respuestas:["Jane Austen", "Edgar Alan Poe", "Stephen King", "Mary Shelly"],
    correcta:1,
    categoria:"cat2",
    yaSalio:false
}

const pregunta18={
    pregunta:"¿Cuál de los siguientes personajes literarios posee alas y cola de dragón?",
    img: "",
    respuestas:["Mare Barrow de La Reina Roja", "Damián del Álamo de Los Cuatro Reinos", "Dan Crawford de Asylum", "Simon Snow de Carry On"],
    correcta:4,
    categoria:"cat2",
    yaSalio:false
}

const pregunta19={
    pregunta:"¿En qué año se publicó la primera edición de la famosa saga de Harry Potter?",
    img: "",
    respuestas:["1999", "2004", "1997", "2002"],
    correcta:3,
    categoria:"cat2",
    yaSalio:false
}

const pregunta20={
    pregunta:"¿Cuál de las siguientes sagas no tiene una adaptación cinematográfica?",
    img: "",
    respuestas:["Los juegos del Hambre", "Hush Hush", "Mentes Poderosas", "Cazadores de Sombras"],
    correcta:2,
    categoria:"cat2",
    yaSalio:false
}

const pregunta21={
    pregunta:"¿Cómo se llama el dios del engaño?",
    img: "",
    respuestas:["Odin", "Hera", "Loki", "Thor"],
    correcta:3,
    categoria:"cat3",
    yaSalio:false
}

const pregunta22={
    pregunta:"Thor es considerado por ser dios de...",
    img: "",
    respuestas:["Trueno", "Rayo", "Luz", "Ninguna"],
    correcta:1,
    categoria:"cat3",
    yaSalio:false
}

const pregunta23={
    pregunta:"¿De qué color es Hulk?",
    img: "",
    respuestas:["Rojo", "Azul", "Verde", "Amarillo"],
    correcta:3,
    categoria:"cat3",
    yaSalio:false
}

const pregunta24={
    pregunta:"¿Que animal representa al rey de Wakanda?",
    img: "",
    respuestas:["Un tigre", "Un leon", "Un Leopardo", "Una pantera"],
    correcta:4,
    categoria:"cat3",
    yaSalio:false
}

const pregunta25={
    pregunta:"¿De que material es el escudo del cap américa?",
    img: "",
    respuestas:["Adamantium", "Vibranium", "Acero reforzado", "Carbonadio"],
    correcta:2,
    categoria:"cat3",
    yaSalio:false
}


const pregunta26={
    pregunta:"¿Quien se sacrifica para obtener la gema del alma?",
    img: "",
    respuestas:["Gamora", "Nebula", "Iron Man", "La Viuda Negra"],
    correcta:4,
    categoria:"cat3",
    yaSalio:false
}

const pregunta27={
    pregunta:"¿Que se fractura Stephen Strange?",
    img: "",
    respuestas:["Las manos", "Los brazos", "Las piernas", "La columna"],
    correcta:1,
    categoria:"cat3",
    yaSalio:false
}

const pregunta28={
    pregunta:"¿Cuantas gemas del infinito son?",
    img: "",
    respuestas:["5", "6", "7", "8"],
    correcta:2,
    categoria:"cat3",
    yaSalio:false
}

const pregunta29={
    pregunta:"¿Quien es la pareja de Toni Stark?",
    img: "",
    respuestas:["Peggy Carter", "Pepper Potts", "Natasha Romanoff", "Jane Foster"],
    correcta:2,
    categoria:"cat3",
    yaSalio:false
}

const pregunta30={
    pregunta:"¿Como obtuvo sus poderes spiderman?",
    img: "",
    respuestas:["De Nacimiento", "Por transferencia", "Por una araña modificada", "Por un experimento"],
    correcta:3,
    categoria:"cat3",
    yaSalio:false
}

const pregunta31={
    pregunta:"¿Cuantas copas del mundo tiene argentina?",
    img: "",
    respuestas:["1", "4", "3", "2"],
    correcta:4,
    categoria:"cat4",
    yaSalio:false
}

const pregunta32={
    pregunta:"¿En qué año fue la primera vez que Argentina ganó la Copa America?",
    img: "",
    respuestas:["1930", "1923", "1921", "1956"],
    correcta:3,
    categoria:"cat4",
    yaSalio:false
}

const pregunta33={
    pregunta:"¿En donde se disputó el primer mundial femenino?",
    img: "",
    respuestas:["Italia", "China", "Japón", "Mexico"],
    correcta:2,
    categoria:"cat4",
    yaSalio:false
}

const pregunta34={
    pregunta:"Nombre de la jugadora con la camiseta n°10 de la selección femenina es... ",
    img: "",
    respuestas:["Mariana Larroquette", "Estefania Banini", "Vanina Correa", "Yael Oviedo"],
    correcta:2,
    categoria:"cat4",
    yaSalio:false
}

const pregunta35={
    pregunta:"¿El nombre que recibió el equipo de la selección femenina de hockey es 'Las Leonas'?",
    img: "",
    respuestas:["Verdadero", "Falso"],
    correcta:1,
    categoria:"cat4",
    yaSalio:false
}




// Meto las preguntas en un array, lista o collecion
//                     0          1          2        ....
const preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18, pregunta19, pregunta20, pregunta21, pregunta22, pregunta23, pregunta24, pregunta25, pregunta26, pregunta27, pregunta28, pregunta29, pregunta30, pregunta31, pregunta32, pregunta33, pregunta34, pregunta35]
// La pregunta actualmente activa Array[1] la notacion con los corchetitos se llama notación vectorial
let preguntaActiva

// Cuando carga la pagina
document.addEventListener('DOMContentLoaded', () =>{
    // Cargar vista inicial
    preguntaActiva = preguntas[mostrarPregunta(preguntas)]
    mostrar_vista('juego')
})

document.addEventListener('click', (event) => {
    // si hizo click en un boton
    if(event.target.matches('#botonRespuesta')){
        let respuestaid = event.target.dataset.respuestaid
        responder(respuestaid, preguntaActiva)
        preguntaActiva = preguntas[mostrarPregunta(preguntas)]
    }
})

function mostrar_vista(vista){
    document.getElementById('ganaste').style.display='none'
    document.getElementById('perdiste').style.display='none'
    document.getElementById('juego').style.display='none'
    document.getElementById(vista).style.display='block'
} 

function responder(respuestaid, preguntaActiva){
    if(respuestaid==preguntaActiva.correcta){
        contadorBien++
        document.getElementById('respuestasCorrectas').textContent = contadorBien
        contadorSegundos=11
        contarSegundos()
    } else {
        perder()
    }
}

function contarSegundos(){
    contadorSegundos--
    document.getElementById('contadorSegundos').textContent = contadorSegundos
    if(contadorSegundos==0){
        perder()
    } else if(contadorBien==10) {
        ganar()
    }
}

function mostrarPregunta(preguntas){
    let pregunta
    let numeroRandom
    do{
        numeroRandom=Math.floor(Math.random() * 34)
        pregunta=preguntas[numeroRandom]
    }while(pregunta.yaSalio)
    pregunta.yaSalio=true
    pregunta = preguntas[numeroRandom]
    $imagen.src=pregunta.img
    for(let i=0;i<4;i++){
        $botones[i].textContent = pregunta.respuestas[i]
    }
    $pregunta.textContent=pregunta.pregunta
    switch(pregunta.categoria){
        case "cat1":
            $categoria.textContent="Musica"
            $imagenCategoria.src="./logos_cat/musica.png"
            break
        case "cat2":
            $categoria.textContent="Libros"
            $imagenCategoria.src="./logos_cat/libro.png"
            break
        case "cat3":
            $categoria.textContent="Marvel"
            $imagenCategoria.src="./logos_cat/marvel.png"
            break
        case "cat4":
            $categoria.textContent="Deporte"
            $imagenCategoria.src="./logos_cat/deporte.png"
            break
    }
    return numeroRandom
}

function perder(){
    mostrar_vista('perdiste')
    document.getElementById('puntuacion').textContent = contadorBien
    clearInterval(correrJuego)
}

function ganar(){
    mostrar_vista('ganaste')
    clearInterval(correrJuego)
}
// Cat1 Musica, Cat2 Libros, Cat3 Marvel, Cat4 Deporte