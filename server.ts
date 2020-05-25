import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import enforce from 'express-sslify';
import compression from 'compression';
import path from 'path';
import axios from 'axios';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

interface FetchSearchResults {
  Search: [];
  Response: string;
  Error: string;
}

interface FetchMovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Ratings: {}[];
  Metascore: string;
  imdbRating: string;
  imdbID: string;
  Response: string;
  Error: string;
}

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/search', async (req: Request, res: Response) => {
  try {
    const response = await axios.get<FetchSearchResults>(
      `https://www.omdbapi.com/?s=${req.body.searchValue}&page=${req.body.page}&apikey=${process.env.OMDB_API_KEY}`
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post(
  ['/favourites/details/:id', '/details/:id'],
  async (req: Request, res: Response) => {
    try {
      const response = await axios.get<FetchMovieDetails>(
        `https://www.omdbapi.com/?i=${req.body.id}&apikey=${process.env.OMDB_API_KEY}`
      );
      res.status(200).send(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

app.get('/service-worker.js', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'server-worker.js'));
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
