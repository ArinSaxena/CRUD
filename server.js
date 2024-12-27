// const express = require('express');
// const fs = require('fs');   // helps in reading file
// const app = express();


// const url = require('url');   // parse the req m aayi hui url

// app.post("/students", (req,res) =>{
//     console.log(req.url)
//     const parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl, );
//     fs.readFile('./data.json', (err, data) =>{
//      if(err){
//         console.log(err);
//         return;
//      }
//     //  res.json(JSON.parse(data));    //read
//     })
//     // res.json({message:"You are connected to the server"});
// })     // listen to get request 


// // app.post()
// app.listen(5000)


const fs = require("fs");
const express = require("express");
const url = require("url");
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

// Getting all students data
app.get("/students", (req, res) => {
  console.log("Request URL: " + req.url);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/students/:id", (req, res) => {
  console.log("Request URL: " + req.url);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const students = JSON.parse(data);
      const student = students.find(
        (student) => student.id === parseInt(req.params.id)
      );
      res.json(student);
    }
  });
});

app.post("/students", (req, res) => {
  console.log("Request URL: " + req.url);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const students = JSON.parse(data);
      students.push(req.body);   
         console.log(req.body);
      fs.writeFile("data.json", JSON.stringify(students), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json(req.body);
        }
      });
    }
  });
});

app.put("/students/:id", (req, res) => {
  console.log("Request URL: " + req.url);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const students = JSON.parse(data);
      const studentIndex = students.findIndex(
        (student) => student.id === parseInt(req.params.id)
      );
      students[studentIndex] = req.body;
      fs.writeFile("data.json", JSON.stringify(students), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({ message: "Data updated successfully" });
        }
      });
    }
  });
});
  app.delete("/students/:id", (req, res) => {
    console.log("Request URL: " + req.url);
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const students = JSON.parse(data);
        const updatedStudents = students.filter(
          (student) => student.id !== parseInt(req.params.id)
        );
        fs.writeFile("data.json", JSON.stringify(updatedStudents), (err) => {
          if (err) {
            console.log(err);
          } else {
            res.json(req.body);
          }
        });
      }
    });
  });