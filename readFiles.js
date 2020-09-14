var fs = require('fs');
var dirPolizas = './pdf/';
var listPolizas;

fs.readdir(dirPolizas, function(err, files){
    if(err){
        console.log(err);
    }else{
        listPolizas = files;
        console.log(listPolizas);
        exports.listPolizas = listPolizas;
    }
});

