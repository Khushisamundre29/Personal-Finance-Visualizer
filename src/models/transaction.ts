import mongoose, { Document, Schema } from 'mongoose';

// 1. Define the TypeScript interface for your Transaction
export interface ITransaction extends Document {
  description: string;
  amount: number;
  date: Date;
  category: string; 
}

// 2. Create the Mongoose Schema
const TransactionSchema: Schema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },  // New category field
});

// 3. Export the model with type safety
export default mongoose.models.Transaction ||
  mongoose.model<ITransaction>('Transaction', TransactionSchema);
