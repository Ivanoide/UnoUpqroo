const rl = require("readline-sync");

// juego UNO 
var deck = [];
var colors = ["Yellow", "Blue", "Green", "Red"];
var types = ["Comun", "Especial", "Comodin"];

var card = {
    color: null, //el color puede ser amarillo, azul, verde y rojo
    number: null, // el numero del 0 al 9
    type: null, // comunes, especiales y comodines
};

for (var ccolor = 0;  ccolor < colors.length; ccolor++){
    console.log("color", colors [ccolor]);
    for (var cNumber = 0; cNumber < 10; cNumber ++){
        deck.push({color: colors[ccolor], number: cNumber, type: "Comun"});

    }

    for (var cNumber1 = 1; cNumber1 < 10; cNumber1 ++){
    }

    deck.push ({color: colors[ccolor], number: "+2", type: "Comun"});
    deck.push ({color: colors[ccolor], number: "+2" , type: "Comun"});
    deck.push ({color: colors[ccolor], number: "Block", type: "Comun"});
    deck.push ({color: colors[ccolor], number: "Block", type: "Comun"});
    deck.push ({color: colors[ccolor], number: "Retro", type: "Comun"});
    deck.push ({color: colors[ccolor], number: "Retro", type: "Comun"});
}

deck.push ({color: null , number: "+4", type: "Comodin"});
deck.push ({color: null , number: "+4" , type: "Comodin"});
deck.push ({color: null , number: "+4", type: "Comodin"});
deck.push ({color: null , number: "+4", type: "Comodin"});
deck.push ({color: null , number: "CC", type: "Comodin"});
deck.push ({color: null , number: "CC", type: "Comodin"});
deck.push ({color: null , number: "CC", type: "Comodin"});
deck.push ({color: null , number: "CC", type: "Comodin"});

//console.log(deck);

const players = rl.question("¿Cuantos jugadores serán?" , {})
