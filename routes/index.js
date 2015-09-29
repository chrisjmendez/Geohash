/************************************************
* Title: Server
* Desc:
* Modified:
* Notes:
* GeoHash is an algorithm that interweaves lat,lng 
* into a string that offers a unique ID. Since datastores 
* don't have strong spatial indexing support, geohashes 
* are the perfect solution.
*
* Special handling of proximity queries for points on
* the edge of a Geohas bounding box can be compensated for
* by doing lookups & queries of the surrounding Geohash 
* bounding boxes.
* 
* Example
* http://universimmedia.pagesperso-orange.fr/geo/loc.htm
* http://boundingbox.klokantech.com/
* 
* //http://localhost:8080/34.03947,-118.26135
* //http://localhost:8080/9q5csuswqc45
* //http://geohash.org/?q=34.03947,-118.26135&format=url&redirect=0
************************************************/

var express = require('express'),
router      = express.Router(),
geohash     = require("geohash").GeoHash

/* GET home page. */
router.get('/:id', function(req, res, next) {	
	var hash = "";
	var params = req.params.id;
	var arr = params.split(',');

	//If coords were passed in, conver them to a hash
	if( arr.length > 1 ){
		hash = geohash.encodeGeoHash( arr[0], arr[1] );
	}
	//If a hash was passed in, keep it as is 
	else {
		hash = params;
	}
	//Decode the hash
	var latlng	= geohash.decodeGeoHash( hash );
	var lat		= latlng.latitude[2];
	var lng		= latlng.longitude[2];
	//In order to make use of the precision of the geohash, it can be used to control the inital zoom level of the map.
	var zoom = hash.length + 2;
	res.render('index', { 
		lat:      lat,
		lng:      lng,
		zoom:     zoom,
		geohash:  hash
	});  
});

module.exports = router;
