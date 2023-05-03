let message;

// Generare un numero random da 1 a 6, sia per il giocatore
numPc = Math.floor((Math.random() * 6 ) + 1);
console.log(numPc);

// Generare un numero random da 1 a 6, sia per il computer.
numUser = Math.floor((Math.random() * 6 ) + 1);
console.log(numUser);

document.querySelector(".pc_number").innerHTML = numPc;
document.querySelector(".user_number").innerHTML = numUser;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if ( numPc > numUser ) {
    message = "Pc";
} else if ( numPc < numUser ) {
    message = "User";
} else {
    message = "anyone";
}

document.querySelector(".winner").innerHTML = message;