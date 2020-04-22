const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const compression = require('compression');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server is running on port ' + port);
});
