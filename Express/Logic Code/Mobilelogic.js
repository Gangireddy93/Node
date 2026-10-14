const Mobile = [];

const getmobile = (req, res) => {
  res.json({ data:Mobile });
};

const createmobile = (req, res) => {
    console.log("req.body---", req.body);

   Mobile.push(req.body)
    // res.json({ message: "newMobile added", data: req.body })
  res.json({ Message:"this isMobile data", data: req. body});
};

const updatemobile = (req, res) => {
  res.json({ data:Mobile });
};

const deletemobile = (req, res) => {
  res.json({ data:Mobile });
};
module.exports = {
    getmobile,
    createmobile,
    updatemobile,
    deletemobile
}