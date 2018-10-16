
module.exports = ( function ( ) {
	const pg = require( 'pg' );
	const cfg = require( './config');

  const config = {
    host : cfg.host,
    user: cfg.user, //env var: PGUSER
    database: cfg.database, //env var: PGDATABASE
    password: cfg.password, //env var: PGPASSWORD
    port: cfg.port //env var: PGPORT
  };


	const client = new pg.Client( config );

	client.connect( );

	function albumById( id , callback ) {
		client.query( `select * from albums where id=$1::int` , [ id ] , function ( err , results ) {
			callback( err , results.rows );
		});
	}

	function tracksByAlbumId( id , callback ) {
		client.query( `select * from tracks where album_id=$1::int` , [ id ] , function ( err , results ) {
			callback( err , results.rows );
		});
	}

	function albumByTitle( title , callback ) {
		client.query( `select * from albums where title=$1::text` , [ title ] , function ( err , results ) {
			callback( err , results.rows );
		});
	}

	function tracksByAlbumTitle( title , callback ) {
		client.query( `select * from tracks t JOIN albums a ON 
			a.id = t.album_id where a.title=$1::text` , [ title ] , function ( err , results ) {
			callback( err , results.rows );
		});
	}


	function close( ) {
		client.end( );
	}


	return {
		albumById : albumById,
		tracksByAlbumId : tracksByAlbumId,
		albumByTitle : albumByTitle,
		tracksByAlbumTitle : tracksByAlbumTitle,
		close : close
	}
})()

