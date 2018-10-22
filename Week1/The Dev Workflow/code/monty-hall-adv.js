
var player1Choice = 0;
var player2Choice = 0;
var doors = [ ];
var hostChoice = 0;

var doorSelected = process.argv[ 2 ];

var doorSelectedInt = doorSelected ? Number.parseInt( doorSelected ) : Math.ceil( Math.random( ) * 3 );

	function initGame( ) {
		doors = [ "Goat" , "Goat" , "Goat"];
		var doorPrize = Math.ceil( Math.random( ) * 3 );
		doors[ doorPrize - 1 ] = "Car";		
		console.log( "Doors : " , doors );
	}

	function makeChoices( choice ) {
		player1Choice = choice;
		if ( doors[ 0 ] === "Goat" && player1Choice != 1 ) {
			hostChoice = 1;
		}
		else if ( doors[ 1 ] === "Goat" && player1Choice != 2 ) {
			hostChoice = 2;
		}
		else {
			hostChoice = 3;
		}

		if ( player1Choice != 1 && hostChoice != 1 ) {
			player2Choice = 1;
		}
		else if ( player1Choice != 2 && hostChoice != 2 ) {
			player2Choice = 2;
		}
		else {
			player2Choice = 3;
		}		
		debugger;
	}

	function displayChoices(  ) {
		console.log( "Players 1 & 2 select " , player1Choice );
		console.log( "Host opens " , hostChoice );
		console.log( "Player 2 switches to " , player2Choice );		
	}

	function displayResults( ) {
		console.log( doors );
		if ( doors[ player1Choice - 1 ] === "Car" ) {
			player1Wins++;
			console.log( "Player 1 wins " );
			console.log( "Player 2 loses " );	
		}
		else if ( doors[ player2Choice - 1 ] === "Car" ) {
			player2Wins++;
			console.log( "Player 2 wins " );
			console.log( "Player 1 loses " );		
		}
		else {
			console.log( "Nobody wins" );
		}		
	}

let player2Wins = 0;
let player1Wins = 0;
for ( let i = 0 ; i < 1000 ; i ++ ) {
	initGame( );
	makeChoices( doorSelectedInt );
	displayChoices( );
	displayResults( );
}
console.log( "Total games 1000, " , player2Wins , " won by player 2, " , player1Wins , " won by player 1");






