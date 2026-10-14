const app = require("express");
const cors = require("cors")
require("dotenv").config()
const app1 = app();

const connectDB = require("./example connect.js");

// const port = 4500;
const port=process.env.PORT
app1.use(cors())
app1.use(app.json());

app1.get("/", async (req, res) => {
  const db = await connectDB();
  const result = await db.collection("student data").find({}).toArray();
  res.send(result);
});

app1.post("/add", async (req, res) => {
  console.log("req.body---", req.body);
  const db = await connectDB();

  const result = await db.collection("student data").insertOne(req.body);


    res.json({
        message: "Data inserted successfully",
        data: {
            _id: result.insertedId,
            ...req.body
        }
})
})


app1.listen(port, () => {
  console.log("server data---");
});
