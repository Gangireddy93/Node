const path=require("path")

// const re=path.join("Node","fie.json","file.pdf")
// console.log(re)

// console.log(path.resolve("new_file"))

// console.log(path.dirname("Class1 file/new_file"))

// console.log(path.extname("File.pdf"))

// const log= path.extname("File.pd")

// if(log===".pdf"|| log == ".jpg"){
//     console.log("this correct")
// }else{
//     console.log("this not correct")
// }

// const log=path.parse("/Class1 files/new_file")
// console.log(log)

const log=path.isAbsolute("Class1 files/new_file")
console.log(log)
