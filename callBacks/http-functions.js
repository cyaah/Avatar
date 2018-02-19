  var https = require('https');
module.exports = function getHTML (options, callback) {
 https.get(options, function (response) {	
  	response.setEncoding('utf8');

    console.log('Status Code: ', response.statusCode);
    console.log('Headers: ', response.headers);

  	var output = "";

  	response.on('data', function (data) {
       
       console.log('Chunk length: ', data + '\n');

        // append our data to our output buffer
        output += data;
    });
     response.on('end', function () {
        callback(output);
    });
  });

  };  