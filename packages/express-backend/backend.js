// backend.js
import express from "express";
import cors from "cors";
import entryServices from "./models/entry-services.js";



const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());



app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

const entries = {
    entries_list: [

    ]
  };

  

  

  
  app.post("/entries", async (req, res) => {
    const entry = req.body;
    const savedEntry = await entryServices.addEntry(entry).
    then(savedEntry =>{
      if (savedEntry)res.status(201).send(savedEntry);
      else res.status(400).send("Unable to add entry");
    })
    .catch(error =>{
      res.status(500).send(`Error adding entry: ${error.message}`);
    })
    
    
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
      const result = await userServices.getEntries(name, date);
      res.send({ entries_list: result });
    } catch (error) {
      console.log(error);
      res.status(500).send("An error ocurred in the server.");
    }
  });


//get user by name
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

