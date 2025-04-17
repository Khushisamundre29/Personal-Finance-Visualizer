'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Button from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface TransactionFormProps {
  onAdd: () => void;
}

export default function TransactionForm({ onAdd }: TransactionFormProps) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: '',
    category: '',  // Added category field
  });
  const [error, setError] = useState<string | null>(null);

  // Handle change for input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { description, amount, date, category } = formData;

    // Check for missing fields
    if (!description || !amount || !date || !category) {
      return setError('Please fill all fields');
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      return setError('Please enter a valid amount');
    }

    // Send data to the server
    const res = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({ description, amount: parsedAmount, date, category }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setFormData({ description: '', amount: '', date: '', category: '' });
      setError(null);
      onAdd();
    } else {
      const data = await res.json();
      setError(data.message || 'Failed to add transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}

      <div className="space-y-2">
        <Label>Description</Label>
        <Input
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label>Amount (₹)</Label>
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label>Date</Label>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>

        </select>
      </div>

      <Button type="submit">Add Transaction</Button>
    </form>
  );
}
