// components/TransactionList.tsx
'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Transaction {
  _id: string;
  description: string;
  amount: number;
  date: string;
}

interface Props {
  refreshFlag: number;
  onDelete: () => void;
}

export default function TransactionList({ refreshFlag, onDelete }: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const res = await fetch('/api/transactions');
    const data = await res.json();
    setTransactions(data);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    onDelete();
  };

  useEffect(() => {
    fetchTransactions();
  }, [refreshFlag]);

  return (
    <div className="mt-6 space-y-3">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      {transactions.map((t) => (
        <Card key={t._id} className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">{t.description}</p>
            <small className="text-sm text-gray-500">
              {new Date(t.date).toLocaleDateString()} — ₹{t.amount}
            </small>
          </div>
          <Button variant="destructive" onClick={() => handleDelete(t._id)}>
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
}
