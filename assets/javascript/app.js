$(document).ready(function () {
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
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;

    //When first name is entered need to register that name to first window, and then display Name on top of window, 
    //with Wins: 0, Losses: 0, on bottom of window. This needs to update on both player screens.

    //When SECOND name is entered, repeat same this as first, but additionally:
    //In active player's window (Player 1), display the choice between Rock, Paper, and Scissors (make clickable)
    //In opposing player's screen, they should NOT SEE the player 1's options for choices. they should just see player 
    //name and wins/losses. 
    
    //Active player (square highlighted in yellow), has the following appended to their name entry row:
    //It's Your Turn!
    //Opposing player displays: "Waiting for <player 1> to choose."

    //Once player 1 picks, the choice flips. Player 1's choice is highlighted, and hidden from player 2. Player 2
    //sees the menu that player 1 initially saw. and player 2's menu is highlighted. Displays mirror etc. etc. 

    //after both choices, compare them and display in the middle if win/loss or tie, again depending on player window's
    //viewpoint. The middle displays "<player> wins!" and then immediately rolls into the next round.

    //chat menu is completely unrelated to game. 

});