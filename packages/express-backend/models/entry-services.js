import mongoose from "mongoose";
import entryModel from "./entry.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/scrapjam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch((error) => console.error("MongoDB connection error:", error));

function getUsers(name) {
  let promise;

  promise = findEntryByName(name);

  return promise;
}

function findEntryById(id_) {
  return entryModel.findById(id_);
}

function addEntry(user) {
  const entryToAdd = new entryModel(user);
  const promise = entryToAdd.save();
  return promise;
}

function findEntryByName(name) {
  return entryModel.find({ name: name });
}

function deleteEntryById(id) {
  return entryModel.findByIdAndDelete({ _id: id });
}

function getEntries(name) {
  if (name) {
    return findEntryByName(name);
  } else {
    return entryModel.find(); // Fetches all entries if no name is provided
  }
}

// Remember to export it
export default {
  addEntry,
  getUsers,
  findEntryById,
  findEntryByName,
  deleteEntryById,
  getEntries, // Add this line to include it in the exported object
};
