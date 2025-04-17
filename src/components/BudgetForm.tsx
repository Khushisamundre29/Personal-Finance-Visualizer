// components/BudgetForm.tsx
'use client';

import React, { useState } from 'react';
import Button from './ui/button';

const BudgetForm = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/budgets', {
      method: 'POST',
      body: JSON.stringify({
        category,
        amount: parseFloat(amount),
        month: new Date().toLocaleString('default', { month: 'short' }),
        year: new Date().getFullYear(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setMessage('Budget saved successfully!');
    } else {
      setMessage('Failed to save budget.');
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl mb-4">Set Your Monthly Budget</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 mb-4 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 mb-4 border rounded"
          required
        />
        <Button type="submit">Save Budget</Button>
      </form>
      {message && <p className="mt-4 text-sm text-green-500">{message}</p>}
    </div>
  );
};

export default BudgetForm;
