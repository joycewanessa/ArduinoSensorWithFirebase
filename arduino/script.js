var firebase = require('firebase');

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

//jhonny five
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
    var light = new five.Light("A0");
    var valueLight = 0;
    light.on("change", function () {
        if (valueLight != this.level) {
            valueLight = this.level;
            console.log(valueLight);
            firebase.database().ref('sensor').set({
                light: this.level
            })
        }
    });
});