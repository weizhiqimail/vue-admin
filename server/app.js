const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const utils = require('./utils');

const app = express();
const PORT = 3000;

app.use(history({
  rewrites: [
    { from: /^\/abc$/, to: '/' }
  ]
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './../dist')));
app.get('/', function (req, res) {
  res.sendFile('./../dist/index.html');
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    let IP = utils.getIPAddress();
    console.log(`server is running at http://localhost:${PORT}`);
    console.log(`server is running at http://${IP}:${PORT}`);
  }
});
