const Laptop = [];

const getlaptop = (req, res) => {
  res.json({ data: Laptop });
};

const createlaptop = (req, res) => {
    console.log("req.body---", req.body);

    Laptop.push(req.body)
    // res.json({ message: "new Laptop added", data: req.body })
  res.json({ Message:"this is Laptop data", data: req. body});
};

const updatelaptop = (req, res) => {
  res.send("Update data");
};

const deletelaptop = (req, res) => {
  res.send("dalete data");
};
module.exports = {
    getlaptop,
    createlaptop,
    updatelaptop,
    deletelaptop
}