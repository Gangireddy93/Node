const app1=require("express")
const app=app1()
const top=3000

const Laptop=require("./components/Laptop")
const Mobile=require("../Express/components/Mobiles")
const logger = require("../Express/Logic Code/Logger");
app.use(app1.json())

app.use("/laptop",Laptop)
app.use("/mobile",Mobile)
app.use(logger)
app.listen(top,()=>{
    console.log(`this server is 5000`)
})