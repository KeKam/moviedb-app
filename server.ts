import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import enforce from 'express-sslify';
import compression from 'compression';
import path from 'path';

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.get('*', function (req: Request, res: Response) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
