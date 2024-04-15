import mongoose from "mongoose";

const FactSchema = new mongoose.Schema({
  fact: {
    type: String,
    required: [true, "Please provide a fact"],
    trim: true,
  },
  number: {
    type: Number,
    required: [true, "Please provide a number"],
  },
});

export default mongoose.model("Fact", FactSchema);
