const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

const connection = async () => {
  try {
    await client.connect();
    console.log("mongodb connected successfully");

    const db = client.db("colllege");
    console.log("db");
    const connect = db.collection("school");

    // app.get("/get", (req, res) => {
    //   const data = connect.find({}).toArray();
    //   console.log(data);
    //   res.json(data);
    // });

    app.post("/add", (req, res) => {
      console.log(req.body);

      const data =  connect.insertOne(req.body);
      res.json(data);
    });

    app.get("/get", (req, res) => {
      const data = connect.find({}).toArray();
      console.log(data);
      res.json(data);
    });
  } catch (error) {
    console.log("MongoDb connection error", error);
  }
};
connection();

app.listen(PORT, () => {
  console.log(`Server is running successfully ${PORT}`);
});
