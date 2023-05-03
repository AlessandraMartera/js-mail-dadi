let message;

const playButton = document.getElementById("play");
const gameDisplay = document.querySelector(".play_section");
const messageDisplaySection = document.querySelector(".first_message_section")


playButton.addEventListener ( "click",
    function () {

        gameDisplay.classList.add("active");
        messageDisplaySection.classList.remove("active");
        // Ask Name's user
        let nameUser = "";
        nameUser = document.querySelector("input.user_name").value;

        // Generare un numero random da 1 a 6, sia per il giocatore
        numPc = Math.floor((Math.random() * 6 ) + 1);
        console.log(numPc);
        document.querySelector(".name").innerHTML = nameUser;

        // Generare un numero random da 1 a 6, sia per il computer
        numUser = Math.floor((Math.random() * 6 ) + 1);
        console.log(numUser);

        // assegnare i numeri usciti alle variabili
        document.querySelector(".pc_number").innerHTML = numPc;
        document.querySelector(".user_number").innerHTML = numUser;

        // Stabilire il vincitore, in base a chi fa il punteggio più alto.
        if ( numPc > numUser ) {
            message = "Pc";
        } else if ( numPc < numUser ) {
            message =  nameUser;
        } else {
            message = "anyone";
        }
        document.querySelector(".winner").innerHTML = message;
    }
  
    
)
