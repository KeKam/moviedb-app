import express, { Request, Response } from 'express';
import axios from 'axios';

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
  imdbRating: string;
  imdbID: string;
  Response: string;
  Error: string;
}

const router = express.Router();

router.post('/search', async (req: Request, res: Response) => {
  try {
    const response = await axios.get<FetchSearchResults>(
      `https://www.omdbapi.com/?s=${req.body.searchTerm}&page=${req.body.page}&apikey=${process.env.OMDB_API_KEY}`
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/details/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.get<FetchMovieDetails>(
      `https://www.omdbapi.com/?i=${req.body.id}&apikey=${process.env.OMDB_API_KEY}`
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export { router as movieRouter };
