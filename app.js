const express = require("express");

const app = express();

const port = 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
}
});

app.get("/api/users", (req,res) => {
    res.status(200)
    .query("select * from users").json
})

const userById = ((req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === parseInt(id))
    if (user) {
        res.status(200)
        .query("select * from users where id = ${id}")
  } else {
    res.status(400).send("Not Found")
  }
});

app.get("/api/users/:id", userById);