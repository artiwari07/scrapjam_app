// backend.js
import express from "express";
import cors from "cors";


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
        id: "789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  
  
const findUserById = (id) =>
  users["users_list"].find((user) => user["id"] === id);

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

  

const addUser = (user) => {
    const randomId = JSON.stringify(Math.floor(Math.random() * 900));
    const newUser = { id: randomId , ...user};
    users["users_list"].push(newUser);
    return newUser;
  };
  
app.post("/users", (req, res) => {
    const userToAdd = req.body;
    const newUser =  addUser(userToAdd);
    res.status(201).send(newUser);
  });




const deleteUser = (userId) => {
    const index = users["users_list"].findIndex(user => user.id === userId);
    if (index !== -1) {
        users["users_list"].splice(index, 1);
        return true;
    } else {
        return false;
    }
};

app.delete("/users/:id", (req, res) => {
    const id = req.params["id"];
    if (deleteUser(id)) {
        res.status(204).send();
    } else {
        res.status(404).send("User not found.");
    }
});

const findUserByName = (name) => {
    return users["users_list"].filter(
      (user) => user["name"] === name
    );
  };
  
app.get("/users", (req, res) => {
    const name = req.query.name;
    if (name != undefined) {
      let result = findUserByName(name);
      result = { users_list: result };
      res.send(result);
    } else {
      res.send(users);
    }
  });