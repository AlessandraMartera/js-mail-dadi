const validEmail = ["prova", "prova@live.it", "alessandra@gmail.com", "gino@gmail.com", "simone@outlook.it", "marika@libero.it"];

//Chiedi all’utente la sua email, 
    let email = prompt( "inserisci la tua email");



//controlla che sia nella lista di chi può accedere,

for ( let i = 0; i < validEmail.length; i++ ) {

//stampa un messaggio appropriato sull’esito del controllo.
    if ( email === validEmail[i]) {
        console.log( "email valida" );
        i = validEmail.length;
    } else {
        console.log("email non valida");
    }
}

