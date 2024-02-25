import mongoose from "mongoose";
import entryModel from "./entry.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/scrapjam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

function getUsers(name) {
  let promise;
  
  promise = findEntryByName(name);

  return promise;
}

function findEntryById(id_) {
  return entryModel.findById({id_ : id_});
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
    return entryModel.findByIdAndDelete({_id : id});
    
  }

export default {
  addEntry,
  getUsers,
  findEntryById,
  findEntryByName,
  deleteEntryById
};