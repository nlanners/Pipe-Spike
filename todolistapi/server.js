var express = require('express'),
    app = express(),
    port = 65535;

app.listen(port);

console.log('RESTful API server started on: ' + port);