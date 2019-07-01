var express = require('express');

var app = express();

app.use(express.json());

var port = 4000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));