## Geohash

##### Difficulty Level (2)

How to use geohash in a url using ExpressJS

### Welcome to geohash
There are many examples of geohash on Github so think of this as a mini example of how to send latitude and longitude coordinates to a URL and receive a geohash.

### Why use geohash?
Geohashes simplifies converting latitude and longitude into a hashed string so that you can store it to your database. Yes, there are many good tools out there like Couchbase, MongoDb and CartoDB but this method works too.

### A few facts

Geohash is an algorithm that was created by Gustavo Niemeyer in 2008. By interleaving latitude and longitude in a bitwise fashion, a composite string is generated that uniquely identifies a geographic point. This string can then be easily stored or used to transmit location point data.

Since the latitude and longitude are interleaved, geohashes have an unique property. As the number of characters decreases from the right side of the string, the accuracy decreases. Points that share similar prefixes will be close together. However, though points can be on the edge of a Geohash bounding box, not all nearby points will share similar prefixes. Since geohashes are easily stored and indexed as strings, in environ- ments and datastores that don’t have strong spatial indexing support, geohashes can be used.

The special handling of proximity queries for points on the edge of a Geohash bounding box can be compensated for by doing lookups and queries of the surrounding Geohash bounding boxes.

### Install Notes

1. Download the package and unzip it. 
2. $ cd /path/of/geohash
3. $ sudo npm install 
4. $ npm start


### Resources 

- [http://openlocation.org/geohash/geohash-js/](http://openlocation.org/geohash/geohash-js/)
- [http://universimmedia.pagesperso-orange.fr/geo/loc.htm](http://universimmedia.pagesperso-orange.fr/geo/loc.htm)
- [http://boundingbox.klokantech.com/](http://boundingbox.klokantech.com/)
- [http://geohash.org/site/tips.html#naming](http://geohash.org/site/tips.html#naming)
