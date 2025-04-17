import { NextResponse } from 'next/server';

// Define the budget type
interface Budget {
  category: string;
  amount: number;
}

const budgets: Budget[] = [
  { category: 'Food', amount: 500 },
  { category: 'Rent', amount: 1200 },
  { category: 'Entertainment', amount: 300 },
  // Add more budgets as needed
];

export async function GET() {
  return NextResponse.json(budgets);
}
