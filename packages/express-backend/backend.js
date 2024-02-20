// backend.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userServices from "./models/user-services.js";
import bcrypt from "bcrypt";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const saltRounds = 10;

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

    app.post("/account/login", async (req, res) => {
      const { userid, password } = req.body;
    
      try {
        console.log("Login attempt with username:", userid);
        const user = await userServices.findUserByName(userid);
        console.log("User from database:", user);
        if (user.length > 0) {
          const passwordMatch = await bcrypt.compare(password.trim(), user[0].password);
          if (passwordMatch) {
          // generating jwt token would be here
            return res.json({success: true});
          } else {
            return res
              .status(401)
              .json({ success: false, error: "Invalid username or password" });
          }
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

    // app.get("/user", (req, res) => {
    //   const name = req.query.name;
    //   const job = req.query.job;

    //   userServices.getUsers(name, job)
    //     .then(user => {
    //       res.send({ user_list: user });
    //     })
    //     .catch(error => {
    //       res.status(500).send(`Error retrieving users: ${error.message}`);
    //     });
    // });

    // app.get("/user/:id", (req, res) => {
    //   const id = req.params.id;

    //   userServices.findUserById(id)
    //     .then(user => {
    //       if (!user) {
    //         res.status(404).send("Resource not found.");
    //       } else {
    //         res.send(user);
    //       }
    //     })
    //     .catch(error => {
    //       res.status(500).send(`Error retrieving user: ${error.message}`);
    //     });
    // });

    // app.post("/user", (req, res) => {
    //   const userToAdd = req.body;

    //   userServices.addUser(userToAdd)
    //     .then(addedUser => {
    //       res.status(201).send(addedUser);
    //     })
    //     .catch(error => {
    //       res.status(500).send(`Error adding user: ${error.message}`);
    //     });
    // });

    // app.delete("/user/:id", (req, res) => {
    //   const id = req.params.id;

    //   userServices.deleteUser(id)
    //     .then(deletedUser => {
    //       if (!deletedUser) {
    //         res.status(404).send("Resource not found.");
    //       } else {
    //         res.status(204).send(); // Respond with a 204 status code (No Content)
    //       }
    //     })
    //     .catch(error => {
    //       res.status(500).send(`Error deleting user: ${error.message}`);
    //     });
    // });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

startServer();