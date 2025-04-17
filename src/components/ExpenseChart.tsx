// components/ExpenseChart.tsx
'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface Transaction {
  amount: number;
  date: string;
}

interface MonthlyData {
  month: string;
  total: number;
}

export default function ExpenseChart() {
  const [data, setData] = useState<MonthlyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/transactions');
        const transactions: Transaction[] = await res.json();

        const grouped: Record<string, number> = {};

        transactions.forEach((t) => {
          const date = new Date(t.date);
          const key = date.toLocaleString('default', { month: 'short', year: 'numeric' });
          grouped[key] = (grouped[key] || 0) + t.amount;
        });

        const chartData: MonthlyData[] = Object.entries(grouped).map(([month, total]) => ({
          month,
          total,
        }));

        setData(chartData);
      } catch (err) {
        console.error('Failed to fetch transactions:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="mt-8 p-4">
      <h2 className="text-xl font-semibold mb-2">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
