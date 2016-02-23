var filtermodule = require('./filtermodule.js');

var callbackfunc = function(err,list){
    if(err){
	console.log('Error');}
    list.forEach(function(file){
	console.log(file);
      })	
};

filtermodule(process.argv[2],process.argv[3],callbackfunc);
