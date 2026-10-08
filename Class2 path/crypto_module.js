const cy=require("crypto")

// const value=cy.randomBytes(16)
// console.log("random-----",value)
// console.log("random--",value.toString("hex"))


// const pass="hello"
// const has=cy.createHash("sha256").update("pass").digest("hex")
// console.log("has------",has)

const pass="123hello"
const has=cy.createHash("sha256").update(pass).digest("hex")
console.log("has------",has)

const log="123hello"
const has1=cy.createHash("sha256").update(log).digest("hex")
console.log("has------",has1)

if(has===has1){
    console.log("this correct")
}else{
    console.log("this is incorrect ")
}