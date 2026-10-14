const { MongoClient,ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function sample() {
  try {
    await client.connect();
    console.log("mongodb connect");
    const db = client.db("workers");
    console.log("db connect", db.dataname);
    const data = db.collection("data");
    // const insert = await data.insertOne({
    //   name: "Reddy",
    //   gender:"Male",
    //   salary: 35000,
    //   age: 23,
    // });
    // console.log("insert data---", insert);

    // const datamult = data.insertMany([
    //   {
    //     name: "pavan",
    //     age: 23,
    //     role: "IT",
    //   },
    //   {
    //     name: "vamshi",
    //     age: 23,
    //     role: "SFT",
    //   },
    //   {
    //     name: "anil",
    //     age: 23,
    //     role: "SFT",
    //   },
    //   {
    //     name: "Anil",
    //     age: 23,
    //     role: "SFT",
    //   },
    //   {
    //     name: "santosh",
    //     age: 23,
    //     role: "SFT",
    //   },
    //   {
    //     name: "lokesh",
    //     age: 23,
    //     role: "SFT",
    //   },
    // ]);
    // console.log("multiple data----", db.datamult);

    const allEmployess = await data
      .find({ _id: new ObjectId('6ace511145e5b539fdd0061e') })
      .toArray();

    console.log("allEmployess-----", allEmployess);
    return db
  } catch (error) {
    console.log("mongo connection error:", error);
  }
//   finally {
//     await client.close();
//     console.log("MongoDB connection closed");
//   }

}
sample();

module.exports =sample;