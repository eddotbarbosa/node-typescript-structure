import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
