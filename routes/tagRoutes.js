'use strict';
module.exports = function(app) {

  // todoList Routes
  app.route('/').get(function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
  });

  app.route('/').post(function(req, res) {
    console.log(req.body);
     
    var fs = require('fs'),
    request = require('request'),
      apiKey = 'acc_433f6a033fff8ee',
      apiSecret = '68220f053ec5c6232063ecaa2c41c857',
      filePath = req.body.path,
      formData = {
          image: fs.createReadStream(filePath)
      };

    request.post({url:'https://api.imagga.com/v2/tags', formData: formData},
      function (error, response, body) {
          console.log('Status:', response.statusCode);
          console.log('Headers:', JSON.stringify(response.headers));
          console.log('Response:', body);
      }).auth(apiKey, apiSecret, true);
    
    res.send(req.body);
  });

};