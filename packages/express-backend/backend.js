// backend.js
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import https from "https";
import fs from "fs";
import userServices from "./models/user-services.js";
import bcrypt from "bcrypt";
import entryServices from "./models/entry-services.js";
import authenticateToken from "./authMiddleware.js";


dotenv.config();
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const saltRounds = 10;
const secretKey = process.env.TOKEN_SECRET;

function generateAccessToken(username) {
  return jwt.sign({ username }, secretKey, { expiresIn: "3600s" });
}

const isStrongPassword = (password) => {
  if (!/[A-Z]/.test(password)) {
    console.log("Failed capital");
    return false;
}
if (!/[a-z]/.test(password)) {
  
    return false;
}
if (!/\d/.test(password)) {
    return false;
}
if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
    return false;
}
if (password.length < 8) {
    return false;
}

return true;
};

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/scrapjam", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Define API routes after successful MongoDB connection
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.post("/account/register", async (req, res) => {
      const { username, password } = req.body;
      try {
        // Check if the username is already taken
        const existingUser = await userServices.findUserByName(username);
  
        if (existingUser.length > 0) {
          return res
            .status(400)
            .json({ success: false, error: "Username already taken" });
        }
  
        // Validate the password
        if (!isStrongPassword(password)) {
          return res.status(400).json({
            success: false,
            error:
              "Password must have at least one capital letter, one lowercase letter, one number, and one special character.",
          });
        }
  
        // Hash the password and username before storing it in the database
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create a new user in the database with the hashed username and password
        const newUser = { username, password: hashedPassword };
        const savedUser = await userServices.addUser(newUser);
        res.json({ success: true, user: savedUser });
      } catch (error) {
        console.error("Error during user registration:", error);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    });

    app.post("/api/createNewUser", async (req, res) => {
      const { username } = req.body;

      try {
        // Find the user by username
        const user = await userServices.findUserByName(username);

        if (user.length > 0) {
          // Generate a token using the username
          const token = generateAccessToken(username);

          // Set the token as an HttpOnly cookie
          res.cookie("token", token, { httpOnly: true });

          res.json({ success: true, token });
        } else {
          return res
            .status(404)
            .json({ success: false, error: "User not found" });
        }
      } catch (error) {
        console.error("Error during token generation:", error);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    });

    app.post("/account/login", async (req, res) => {
      const { userid, password } = req.body;
    
      try {
        console.log("Login attempt with username:", userid);
        const user = await userServices.findUserByName(userid);
        console.log("User from database:", user);
        if (user.length > 0) {
          const passwordMatch = await bcrypt.compare(password.trim(), user[0].password);
          
          if (passwordMatch) {
            const token = generateAccessToken(userid);
            return res.json({ success: true, token });
          } else {
            return res
              .status(401)
              .json({ success: false, error: "Invalid username or password" });
          }
        } else {
          return res
            .status(401)
            .json({ success: false, error: "Invalid username or password" });
        }
      } catch (error) {
        console.error("Error during login:", error);
        return res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    });

    app.get("/account/users", (req, res) => {
      res.json({ success: true, users });
    });

    // New route to get an individual user by username
    app.get("/account/users/:username", (req, res) => {
      const { username } = req.params;
      const user = users.find((u) => u.username === username);

      if (user) {
        res.json({ success: true, user });
      } else {
        res.status(404).json({ success: false, error: "User not found" });
      }
    });


    app.get("/api/contacts", authenticateToken, async (req, res) => {
      try {
        // Retrieve contacts from the database using the new function
        const contacts = await userServices.getAllContacts();

        res.json({ success: true, contacts });
      } catch (error) {
        console.error("Error fetching contacts:", error);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    });

    app.delete("/entries/:id", (req, res) => {
      const id = req.params["id"];
      
      entryServices.deleteEntryById(id)
      .then(entry => {
      if (entry) {
        res.status(204).send();
        }
        else{
          res.status(404).send("Resource not found.")
        }
      })
      .catch(error => {
        res.status(500).send(`Error deleting entry: ${error.message}`);
      });
    });

  //get all entriers
    app.get("/entries", async (req, res) => {
      const name = req.query["name"];
      const date = req.query["date"];
      try {
        const result = await entryServices.getEntries(name, date);
        res.send({ entries_list: result });
      } catch (error) {
        console.log(error);
        res.status(500).send("An error ocurred in the server.");
      }
    });

  app.get("/entries", (req, res) => {
      const name = req.query.name;
      entryServices.findEntryByName(name)
    .then(entry => {
      if (!entry) {
        res.status(404).send("Resource not found.");
      } else {
        res.send({ entries_list: result });}
      })
      .catch(error => {
        res.status(500).send(`Error retrieving entry: ${error.message}`);
      });
    });
   
  //get user by id
  app.get("/entries/:id", (req, res) => {
    const id = req.params["id"]; //or req.params.id
    entryServices.findEntryById(id)
    .then(entry => {
      if (!entry) {
        res.status(404).send("Resource not found.");
      } else {
        res.send({ entries_list: result });}
      })
      .catch(error => {
        res.status(500).send(`Error retrieving entry: ${error.message}`);
      });
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

startServer();
