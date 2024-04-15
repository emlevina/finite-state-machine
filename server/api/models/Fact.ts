import mongoose, { Schema, Document } from "mongoose";

interface IFact extends Document {
  fact: string;
  number: number;
}

const FactSchema: Schema = new Schema({
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

const Fact = mongoose.model<IFact>("Fact", FactSchema);
export default Fact;
