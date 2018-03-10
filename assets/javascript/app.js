// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBWe0YcRV08WJczPHqjEihrbdOVO-h__I",
    authDomain: "zog-rps-multiplayer.firebaseapp.com",
    databaseURL: "https://zog-rps-multiplayer.firebaseio.com",
    projectId: "zog-rps-multiplayer",
    storageBucket: "",
    messagingSenderId: "290336971631"
};
firebase.initializeApp(config);

//chunk firebase into a /chat section, /players section, with a /1, /2, and /turn subsection
//players subsections /1 and /2 have info on choice, name, losses, and wins
//turn literally is 1, if it's player 1's turn, or 2, if it is player 2's turn