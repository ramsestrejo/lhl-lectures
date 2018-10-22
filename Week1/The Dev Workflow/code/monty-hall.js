
var player1Choice = 0;
var player2Choice = 0;

var doorSelected = process.argv[ 2 ];

var doorSelectedInt = Number.parseInt( doorSelected );

player1Choice = doorSelectedInt;
player2Choice = doorSelectedInt;

var doors = [ "Goat" , "Goat" , "Goat"];
var doorPrize = Math.ceil( Math.random( ) * 3 );
doors[ doorPrize - 1 ] = "Car";

var hostChoice = 0;
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


console.log( "Players 1 & 2 select " , player1Choice );
console.log( "Host opens " , hostChoice );
console.log( "Player 2 switches to " , player2Choice );
console.log( doors );
if ( doors[ player1Choice - 1 ] === "Car" ) {
	console.log( "Player 1 wins " );
	console.log( "Player 2 loses " );	
}
else if ( doors[ player2Choice - 1 ] === "Car" ) {
	console.log( "Player 2 wins " );
	console.log( "Player 1 loses " );		
}
else {
	console.log( "Nobody wins" );
}




