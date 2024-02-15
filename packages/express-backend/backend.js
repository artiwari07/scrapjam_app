// backend.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userServices from "./models/user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/user", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Define API routes after successful MongoDB connection
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.get("/user", (req, res) => {
      const name = req.query.name;
      const job = req.query.job;

      userServices.getUsers(name, job)
        .then(user => {
          res.send({ user_list: user });
        })
        .catch(error => {
          res.status(500).send(`Error retrieving users: ${error.message}`);
        });
    });

    app.get("/user/:id", (req, res) => {
      const id = req.params.id;

      userServices.findUserById(id)
        .then(user => {
          if (!user) {
            res.status(404).send("Resource not found.");
          } else {
            res.send(user);
          }
        })
        .catch(error => {
          res.status(500).send(`Error retrieving user: ${error.message}`);
        });
    });

    app.post("/user", (req, res) => {
      const userToAdd = req.body;

      userServices.addUser(userToAdd)
        .then(addedUser => {
          res.status(201).send(addedUser);
        })
        .catch(error => {
          res.status(500).send(`Error adding user: ${error.message}`);
        });
    });

    app.delete("/user/:id", (req, res) => {
      const id = req.params.id;

      userServices.deleteUser(id)
        .then(deletedUser => {
          if (!deletedUser) {
            res.status(404).send("Resource not found.");
          } else {
            res.status(204).send(); // Respond with a 204 status code (No Content)
          }
        })
        .catch(error => {
          res.status(500).send(`Error deleting user: ${error.message}`);
        });
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

startServer();