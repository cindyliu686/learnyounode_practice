var http = require('http');
var bl = require('bl');
var dataStr = [];
var count = 0;

function httpGet (i){
	http.get(process.argv[2 + i],function(res){
		res.pipe(bl(function(err,data){
			if (err) return console.error(err);

			dataStr[i] = data.toString();
			count++;

			if (count == 3){
				for (var j = 0; j < 3; j++){
					console.log(dataStr[j]);
				}				
			}

		}))
	})
}



for(var i = 0; i < 3; i++){
	httpGet(i);
}