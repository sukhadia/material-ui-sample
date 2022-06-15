var express = require('express');
var app = express();
var cors = require('cors');
// var bodyParser = require('body-parser');

// create application/json parser
// var jsonParser = bodyParser.json()
app.use(express.json())

app.use(cors());

app.post('/api/logon', function (req, res) {
  console.log(`req.body: `, req.body);
  console.log(`req.body.userId: `, req.body.userId);
  const body = req.body;
  if (body.userId === 'errorId') {
    console.log('Returning 400');
    res.status(400).json({
      status: "failure",
      message: `Failed login attempt. req: ${req.body}`,
    });
  } else {
    console.log('Returning 200');
    res.status(200).json({
      status: "success",
      message: `Successful login attempt. req: ${req.body}`,
    });
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
