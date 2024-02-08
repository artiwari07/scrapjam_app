// backend.js
import express from "express";
import cors from "cors";
import userServices from "./models/user-services.js";



const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());



app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

const users = {
    users_list: [
      {
        id_: "789",
        name: "Charlie",
        job: "Janitor"
      },

    ]
  };

  

  

  
  app.post("/users", async (req, res) => {
    const user = req.body;
    const savedUser = await userServices.addUser(user).
    then(savedUser =>{
      if (savedUser)res.status(201).send(savedUser);
      else res.status(400).send("Unable to add user");
    })
    .catch(error =>{
      res.status(500).send(`Error adding user: ${error.message}`);
    })
    
    
  });






app.delete("/users/:id", (req, res) => {
    const id = req.params["id"];
    
    userServices.deleteUserById(id)
    .then(user => {
    if (user) {
      res.status(204).send();
      }
      else{
        res.status(404).send("Resource not found.")
      }
    })
    .catch(error => {
      res.status(500).send(`Error deleting user: ${error.message}`);
    });
  });


  app.get("/users", async (req, res) => {
    const name = req.query["name"];
    const job = req.query["job"];
    try {
      const result = await userServices.getUsers(name, job);
      res.send({ users_list: result });
    } catch (error) {
      console.log(error);
      res.status(500).send("An error ocurred in the server.");
    }
  });

//get user by name
app.get("/users", (req, res) => {
    const name = req.query.name;
    userServices.findUserByName(name)
  .then(user => {
    if (!user) {
      res.status(404).send("Resource not found.");
    } else {
      res.send({ users_list: result });}
    })
    .catch(error => {
      res.status(500).send(`Error retrieving user: ${error.message}`);
    });
  });


//get user by id
app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  userServices.findUserById(id)
  .then(user => {
    if (!user) {
      res.status(404).send("Resource not found.");
    } else {
      res.send({ users_list: result });}
    })
    .catch(error => {
      res.status(500).send(`Error retrieving user: ${error.message}`);
    });
  });

 //get user by name and job
 app.get("/users", async (req, res) => {
  const name = req.query["name"];
  const job = req.query["job"];
  try {
    const result = await userServices.getUsers(name, job);
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});