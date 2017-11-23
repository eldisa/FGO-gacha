/**
 * Created by Dias on 2017/11/6.
 */
var fs = require('fs'),
    request = require('request');
var targetData = require('./FGO/Servants/all.json');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
targetData.forEach(function(element){
    download(element.img,element.id+".png",function () {
    console.log("done");
});} );

