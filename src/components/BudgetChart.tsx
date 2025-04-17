'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from './ui/card';

// Define types for the fetched data
interface Budget {
  category: string;
  amount: number;
}

interface Transaction {
  category: string;
  amount: number;
}

interface ChartData {
  category: string;
  budget: number;
  actual: number;
}

const BudgetChart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Fetch budget data from API
      const budgetRes = await fetch('/api/budgets');
      const budgets: Budget[] = await budgetRes.json();

      // Fetch transaction data from API
      const transactionsRes = await fetch('/api/transactions');
      const transactions: Transaction[] = await transactionsRes.json();

      // Sum up actual spending by category
      const spending: { [key: string]: number } = {}; // Explicitly typing the object

      transactions.forEach((transaction) => {
        spending[transaction.category] = (spending[transaction.category] || 0) + transaction.amount;
      });

      // Prepare data for chart
      const data: ChartData[] = budgets.map((budget) => ({
        category: budget.category,
        budget: budget.amount,
        actual: spending[budget.category] || 0,
      }));

      setChartData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <Card className="mt-8 p-4">
      <h2 className="text-xl font-semibold mb-2">Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="budget" fill="#8884d8" />
          <Bar dataKey="actual" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BudgetChart;
