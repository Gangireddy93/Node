const express = require("express");
const connectDB = require("../Mongodb/Sample");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/data", async (req, res) => {
  const db = await connectDB();

  const result = await db.collection("data").find({}).toArray();

  res.json(result);
});

app.post("/data", async (req, res) => {
  console.log("req.body---", req.body);

  const db = await connectDB();

  const result = await db.collection("data").insertOne(req.body);

  res.json(result);
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
