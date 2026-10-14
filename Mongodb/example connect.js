const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");
require("dotenv").config();
// const url = "mongodb://127.0.0.1:27017";
const url =process.env.MONGO_URL
console.log(url)

const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("Mongodb data---");
    const db = client.db("institute");
    console.log("instute");
    // const collection = db.collection("student data");
    // console.log("connect -----", db.data);
    // const insert = await collection.insertOne({
    //   name: "Reddy",
    //   gender: "Male",
    //   salary: 35000,
    //   age: 23,
    // });
    // console.log("insert data---", insert);
    return db;
  } catch (error) {
    console.log("Error", error);
  }
}
connectDB();

module.exports = connectDB;
