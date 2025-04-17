// utils/validation.ts

export interface TransactionData {
  description: string;
  amount: string | number;
  date: string;
}

export function validateTransaction({ description, amount, date }: TransactionData): string | null {
  if (!description.trim()) return 'Description is required';
  if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) return 'Amount must be a valid number greater than 0';
  if (!date) return 'Date is required';
  return null; // no errors
}
