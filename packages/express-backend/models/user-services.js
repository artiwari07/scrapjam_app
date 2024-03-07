import mongoose from "mongoose";
import userModel from "./user.js";
import sanitize from "mongo-sanitize";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/scrapjam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

function getUsers(username, job) {
  let promise;
  if (name === undefined && job === undefined) {
    promise = userModel.find();
  } else if (name && !job) {
    promise = findUserByName(username);
  } else if (job && !username) {
    promise = findUserByJob(job);
  } else if (job && username) {
    promise = findUserByNameAndJob(username, job);
  }
  return promise;
}

function findUserById(id) {
  return userModel.findById(id);
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function isValidUsername(username) {
  const re = /^[a-zA-Z0-9_]+$/;
  return re.test(username);
}

async function findUserByName(username) {
  if (!isValidUsername(username)) {
    throw new Error("Invalid username");
  }

  let sanitizedUsername = sanitize(username);
  return await userModel.find({ username: sanitizedUsername });
}

function findUserByJob(job) {
  return userModel.find({ job: job });
}

function findUserByNameAndJob(name, job) {
  return userModel.find({ name, job });
}

function deleteUser(id) {
  return userModel.findByIdAndDelete(id);
}

export default {
  addUser,
  getUsers,
  deleteUser,
  findUserById,
  findUserByName,
  findUserByJob,
  findUserByNameAndJob,
};
