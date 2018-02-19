  var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {	
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
        console.log(output);
    });
  });

}
getAndPrintHTML();