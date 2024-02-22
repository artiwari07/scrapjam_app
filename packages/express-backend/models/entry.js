import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    
    },
  },
  { collection: "entries_list" }
);

const Entry = mongoose.model("Entry", EntrySchema);

export default Entry;