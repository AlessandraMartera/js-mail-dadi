const validEmail = ["prova", "prova@live.it", "alessandra@gmail.com", "gino@gmail.com", "simone@outlook.it", "marika@libero.it"];
const button = document.getElementById("check");
// Chiedi all’utente la sua email, 
    // let email = prompt( "inserisci la tua email");
let message = document.getElementById("message");

// controlla che sia nella lista di chi può accedere,
// check button
button.addEventListener( "click",
    function () {

        let email = document.getElementById("email").value;

        for ( let i = 0; i < validEmail.length; i++ ) {

            // stampa un messaggio appropriato sull’esito del controllo.
            if ( email === validEmail[i]) {
                message.innerHTML = "Email Valida";
                i = validEmail.length;
            } else {
                message.innerHTML = "Email NON Valida";
            }
        }

        document.getElementById("email").value = "";
    }
)

