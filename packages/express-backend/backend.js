// backend.js
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userServices from "./models/user-services.js";
import bcrypt from "bcrypt";
import entryServices from "./models/entry-services.js";
import authenticateToken from "./authMiddleware.js";

dotenv.config();
const app = express();
const port = 8000;
app.use(
  cors({
    // origin: "https://zealous-meadow-02867d41e.5.azurestaticapps.net/",
    origin: ["http://localhost:3000", "http://localhost:8000"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  }),
);
app.use(express.json());

const saltRounds = 10;
const secretKey = process.env.TOKEN_SECRET;
const users = [];

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
  if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
    return false;
  }
  if (password.length < 8) {
    return false;
  }

  return true;
};

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
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
          const passwordMatch = await bcrypt.compare(
            password.trim(),
            user[0].password,
          );

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

    app.delete("/entries/:id", authenticateToken, (req, res) => {
      const userId = req.user._id;
      const entryId = req.params.id;
      entryServices
        .deleteEntryById(entryId, userId)
        .then((entry) => {
          if (entry) {
            res.status(204).send();
          } else {
            res
              .status(404)
              .send("Resource not found or not authorized to delete.");
          }
        })
        .catch((error) => {
          res.status(500).send(`Error deleting entry: ${error.message}`);
        });
    });

    app.post("/entries", authenticateToken, async (req, res) => {
      const entryData = req.body;
      const userId = req.user._id;
      const newEntry = { ...entryData, userId: userId };

      try {
        const savedEntry = await entryServices.addEntry(newEntry);
        res.status(201).json(savedEntry);
      } catch (error) {
        console.error("Error adding new entry:", error);
        res
          .status(500)
          .json({ message: "Failed to add new entry", error: error.message });
      }
    });

    app.get("/entries", authenticateToken, async (req, res) => {
      const userId = req.user._id;
      try {
        const entries = await entryServices.getEntriesForUser(userId);
        res.json({ success: true, entries });
      } catch (error) {
        console.error("Error fetching entries:", error);
        res.status(500).send("An error occurred on the server.");
      }
    });

    //get user by id
    app.get("/entries/:id", async (req, res) => {
      const { id } = req.params; // Correctly capture the 'id' route parameter.
      // If you're trying to use a 'name' query parameter instead, you should access it using req.query.name

      try {
        // Assuming you meant to fetch an entry by its ID:
        const entry = await entryServices.findEntryById(id);
        if (!entry) {
          return res.status(404).send("Resource not found.");
        } else {
          return res.send(entry);
        }
      } catch (error) {
        console.error(`Error retrieving entry: ${error.message}`);
        return res.status(500).send(`Error retrieving entry: ${error.message}`);
      }
    });

    app.put("/entries/:id", authenticateToken, async (req, res) => {
      const { id } = req.params;
      const entryData = req.body;

      try {
        const updatedEntry = await entryServices.updateEntryById(id, entryData);
        if (updatedEntry) {
          res.json({ success: true, entry: updatedEntry });
        } else {
          res.status(404).json({ success: false, error: "Entry not found" });
        }
      } catch (error) {
        console.error("Error updating entry:", error);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    });

    app.listen(process.env.PORT || port, () => {
      console.log("REST API is listening.");
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

startServer();
