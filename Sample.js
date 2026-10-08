const fs = require("fs");
// const

//                file create

// fs.writeFile("login.app", "this", (err) => {
//   if (err) {
//     return;
//   }
//   console.log("efjbed");
// });

//          file Rename

// fs.rename("File.txt","new_file",(err)=>{
//     if(err){
//         return
//     }
//     console.log("file rename")
// })

//                file read data

// fs.readFile("File.txt","utf8",(err,da)=>{
//     if(err){
//         return
//     }
//     console.log(da)
// })

//               file add data

// fs.appendFile("File.txt","\t and Reactjs",(err)=>{
//     if(err){
//         return
//     }
//     console.log("data adding")
// })

// fs.writeFile("deletefile","this data file delete",(err)=>{
//     if(err){
//         return
//     }
//     console.log("addfile")
// })

//                      delete file

// fs.unlink("deletefile",(err)=>{
//     if(err){
//         return
//     }
//     console.log("delete")
// })

//  file is availabel are note

// console.log(fs.existsSync("new_file"))

// if (fs.existsSync("new_file")) {
//     console.log("file exists");
// } else {
//     console.log("file does not exist");
// }

//                      Upload file

// fs.mkdir("second folder", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder created");
// });

// fs.rmdir("second folder",(err)=>{
//     if(err){
//         return
//     }
//     console.log("remove ")
// })

// fs.readdir(".",(err,file)=>{
//     if(err){
//         return
//     }
//     // console.log(`file ${file}`)
//     console.log(file)
// })

// const user={
//     id:"50",
//     name:"reddy",
//     brach:"AI"
// }

// fs.writeFile("file.json",JSON.stringify(user,null,2),(err)=>{
//     if(err){
//         return
//     }
//     console.log("json data")
// })

// fs.readFile("file.json","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     const user=JSON.parse(data)
//     console.log(user)
//     console.log(user.id)
// })

const log=`${new Date().toISOString()}--user login date\n`

fs.appendFile("login.app",log,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("user login ")
})
