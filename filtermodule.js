var fs = require('fs');
var path = require('path');

module.exports  = function(dirname,ext,callbackfunc){
	fs.readdir(dirname, function (err, list) {
		if(err){
			return callbackfunc(error);
		}
		
		var newlist = [];
		list.forEach(function(file){
		  if (path.extname(file) === '.' + ext){
		     newlist.push(file);
		  }
		})		

	        callbackfunc(null,newlist);
        })
};
