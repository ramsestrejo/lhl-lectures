

const musicdb = require("./module-albums");


var album = process.argv[ 2 ];

let albumId = Number.parseInt ( album );

if ( album && Number.isNaN ( albumId ) ){

	musicdb.albumByTitle( album , function ( err, data ) {

		console.log( "album -----" );
		console.log( data );
	});
	musicdb.tracksByAlbumTitle( album , function ( err ,  rows ) {

		console.log( "tracks ----" );
		rows.forEach( ( row ) => {
			console.log( row.title );
		});
		musicdb.close();
	});
}
else {

	musicdb.albumById(  albumId , function ( err , data ) {

		console.log( "album -----" );
		console.log( data );
	});

	musicdb.tracksByAlbumId( albumId , function ( err , rows ) {

		console.log( "tracks ----" );
		rows.forEach( ( row ) => {
			console.log( row.title );
		});
		musicdb.close();
	});
}

//