import mongoose from "mongoose";
import entryModel from "./entry.js";

mongoose.set("debug", true);

function getUsers(name) {
  let promise;

  promise = findEntryByName(name);

  return promise;
}

function findEntryById(id_) {
  return entryModel.findById(id_);
}

function addEntry(entry) {
  const entryToAdd = new entryModel(entry);
  const promise = entryToAdd.save();
  return promise;
}

function findEntryByName(name) {
  return entryModel.find({ name: name });
}

function deleteEntryById(entryId, userId) {
  return entryModel.findOneAndDelete({ _id: entryId, userId: userId });
}

function getEntries(userId, name) {
  let query = { userId: userId };
  if (name) {
    query.name = name;
  }
  return entryModel.find(query);
}

// Remember to export it
export default {
  addEntry,
  getUsers,
  findEntryById,
  findEntryByName,
  deleteEntryById,
  getEntries,
};
