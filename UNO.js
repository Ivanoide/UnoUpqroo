// para solicitar al usuario
const rl = require("readline-sync");
let MazoRevuelto = require('./modules/revuelveMazo')
//juego UNO
var deck = [];
var colors = ["Yellow","Blue", "Green", "Red"];
var types = ["Comun", "Especial","Comodin"];
var card = {
    color: null, // amarillo, azul , verde , rojo 
    number: null, // 0-9
    Type: null // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ){
    
    for (var cNumber = 0; cNumber < 10; cNumber++){
        
        deck.push({color: colors[cColor], number: cNumber, type: "comun"});
    }
    for (var cNumber1 = 1; cNumber < 10; cNumber1++){
        
    }
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});

} 

deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});

//npm init (inicializar un proyecto en node)
//verifico que tenga el archivo package-json
//npm install o i <modulo>

//console.log(deck);

const players = rl.question("¿cuantos jugadores seran?", {})
const totalcards = players * 7;
//repartir 7 cartas x jugador
//dependencia (un codigo que depende de otro codigo)
// node package manager (npm)
// recorro el total de tarjetas (total de tarjetas = tarjetas x jugador)
// un arreglo x jugador 
//investigar comparadores, varidarodes de variables 
var cardsPlayers = {};

for(var cTcards = 0; cTcards < 7; cTcards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++) {
        //console.log(" players ", cPlayers)
        if (!cardsPlayers["player_"+cPlayers]) {
            cardsPlayers["player_"+cPlayers] = [];
        }

        cardsPlayers["player_"+cPlayers].push(deck.shift());;
        //console.log(deck.shift());
        //console.log(cardsPlayers)
        }
}

var trash = [];
trash.push(deck.shift());

console.log(trash);

function cardValidation (card) {
    console.log(card.number);
    //length regresa el tamaño total del arreglo
//Los operadores amperson (&&) evaluan y si las dos se cumplen para ejecutar, si una de ellas no se cumple, no se ejecuta
//Los operadores pibe (||) evaluan que uno u otro sea verdadero y si una lo es se ejecuta

    if (card.number == trash[trash.length-1].number || card.color == trash [trash.length-1].color ) {
        console.log("es igual");
    } else { console.log("no es igual"); }
        
    }
cardValidation({color: "Yellow", number: 3, types: "comun"})

//mostrar todas las cartras que le tocaron al maso del primer jugador

for (const player in cardsPlayers){
    console.log(cardsPlayers[player]);
    //Primer player ponga una carta de
    // PASO 1:Ver mis cartas
    // PASO 2: Elegir carta 
    // PASO 3: Validar carta
    // PASO 4: Poner carta (de mano a jugardor a trash)
}

MazoRevuelto(deck);

console.log("Mazo revuelto:");
console.log(deck);

