import { NextResponse } from 'next/server';

// Define the transaction type
interface Transaction {
  category: string;
  amount: number;
}

const transactions: Transaction[] = [
  { category: 'Food', amount: 150 },
  { category: 'Rent', amount: 1200 },
  { category: 'Entertainment', amount: 200 },
  // Add more transactions as needed
];

export async function GET() {
  return NextResponse.json(transactions);
}
