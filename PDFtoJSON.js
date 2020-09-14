var listPolizas = require('./readFiles');
var PdfReader = require("pdfreader").PdfReader; 
var fs = require('fs');
var filename = './pdf/poliza2.pdf'; 
var allPDF = [];
var numarray = 0; 

function printRawItems(filename, callback) {
    new PdfReader().parseFileItems(filename, function(err, item) {
        if (err) callback(err);
        else if (!item) callback();
        else {
            allPDF[numarray] = item;
            numarray++;
        }
    });
}


printRawItems(filename, function(err) {
    if(err){
        console.log(err);
    }else{
        let polizaJSON = JSON.stringify(allPDF);

        fs.writeFile('./result/poliza.json', polizaJSON, (err) =>  {
            if(err){
                console.log(err);
            }else{
                console.log(listPolizas);
                console.warn('Pdf converted successfully ...');
            }
        });
    }
});

exports.poliza = allPDF;
