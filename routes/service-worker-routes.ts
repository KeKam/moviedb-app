import express, { Request, Response } from 'express';
import path from 'path';

const router = express.Router();

router.get('/service-worker', (req: Request, res: Response) => {
  res.sendFile(
    path.resolve(__dirname, '..', 'client/build', 'server-worker.js')
  );
});

export { router as serviceWorkerRouter };
