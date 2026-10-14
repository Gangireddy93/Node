const express = require("express");

const app = express();
app.use(express.json());
const server = 5000;

//middleware
app.use((req, res, next) => {
    console.log("Middleware execute")
    next();
})

const logger = (req, res, next) => {
    console.log(req.method);
    console.log(req.url)
    next()
}

app.use(logger)
app.get("/", (req, res) => {
  console.log("data");
  res.send("create");
});

app.get("/users/:number", (req, res) => {
  console.log("req.body---", req.params.number);

  res.send(`get users--${req.params.number}`);
});

// app.get("/users", (req, res) => {
//   console.log("req.query---", req.query);

//   res.send(req.query);
// });

app.get("/users", (req, res) => {
  console.log("req.body---", req.body);

  res.send(req.body);
});

app.post("/users", (req, res) => {
  console.log("req.body---", req.body);
  res.send(req.body);
});

app.listen(server, () => {
  console.log(`this server correct${server}`);
});
