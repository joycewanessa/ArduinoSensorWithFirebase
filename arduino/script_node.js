var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function () {
    var led = new five.Led(13)

    this.repl.inject({
        led: led,

    });

//essa parte, é copiada do firebase
//após criar o projeto, abra a opção projeto Web e copie o código pra cá
//apenas o que está entre os traços abaixo
//------------------------------------------------------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBFN6qf7LEEZ6FsPey-C0oUNCDbtcLaQB8",
    authDomain: "arduino-35845.firebaseapp.com",
    databaseURL: "https://arduino-35845.firebaseio.com",
    projectId: "arduino-35845",
    storageBucket: "arduino-35845.appspot.com",
    messagingSenderId: "209921599889",
    appId: "1:209921599889:web:6749f7a0ee04712dc71230"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//------------------------------------------------------------------------------------
  
  
//path do banco
var rootRef = firebase.database().ref();


//jhonny five
let lampada = document.querySelector("#lampada");

    lampada.addEventListener("click", () => {

        let estado = lampada.getAttribute('data-state');

        console.log(lampada);

        if (estado == 'off') {

            firebase.database().ref("lampada").set("on");

        } else {

            firebase.database().ref("lampada").set("off");
        }


    });

    firebase.database().ref('lampada').on('value', snapshot => {

        let l = snapshot.val();

        if (l == "on") {
            lampada.src = 'lamp2.png';
            lampada.setAttribute('data-state', 'on');

        } else {
            lampada.src = 'lamp1.jpg';
            lampada.setAttribute('data-state', 'off');

        }




    })
});