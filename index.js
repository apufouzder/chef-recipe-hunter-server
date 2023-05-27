const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const { chefs } = require('./data/chefsData.json');
const { blogs } = require("./data/blogs.json");


app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running...')
});

app.get('/chefs', (req, res) => {
  res.send(chefs);
});

app.get('/chefs/:id', (req, res) => { 
  const id = +req.params.id;
  const selectedChefRecipe = chefs.find(c => c.id === id);
  res.send(selectedChefRecipe);
})

app.get('/blogs', (req, res) => {
  res.send(blogs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})