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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      type: String,
      required: false,
      trim: true,
    },
    imageUrls: [
      {
        type: String,
        required: false,
      },
    ],
    textColor: {
      type: String,
      required: false,
      default: "#000000", // Default text color is black
    },
    textAreaColor: {
      type: String,
      required: false,
      default: "#ffffff", // Default textbox color is white
    },
  },
  { collection: "entries_list" },
);

const Entry = mongoose.model("Entry", EntrySchema);

export default Entry;
