'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import Button from '@/components/ui/button';

const sampleData = [
  { name: 'Income', amount: 1200 },
  { name: 'Expense', amount: 800 },
];

const sampleTransactions = [
  { id: 1, date: '2025-04-01', description: 'Grocery', amount: 100 },
  { id: 2, date: '2025-04-03', description: 'Salary', amount: 1200 },
  { id: 3, date: '2025-04-05', description: 'Utility Bills', amount: 200 },
];

const sampleBudget = [
  { category: 'Groceries', budgeted: 300, spent: 150 },
  { category: 'Entertainment', budgeted: 200, spent: 80 },
  { category: 'Utilities', budgeted: 100, spent: 50 },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
<div className="w-64 bg-gray-800 text-white flex flex-col p-6 shadow-xl fixed h-full">
  <div className="text-4xl font-bold text-left mb-8">Personal Finance Visualizer</div> {/* Adjusted font size and alignment */}
  <div className="flex flex-col space-y-6">
    <Button
      variant={activeSection === 'dashboard' ? 'primary' : 'secondary'}
      onClick={() => setActiveSection('dashboard')}
      className="w-full py-3 px-4 text-lg font-semibold hover:bg-gray-700 transition-all"
    >
      Dashboard
    </Button>
    <Button
      variant={activeSection === 'transactions' ? 'primary' : 'secondary'}
      onClick={() => setActiveSection('transactions')}
      className="w-full py-3 px-4 text-lg font-semibold hover:bg-gray-700 transition-all"
    >
      Transactions
    </Button>
    <Button
      variant={activeSection === 'budget' ? 'primary' : 'secondary'}
      onClick={() => setActiveSection('budget')}
      className="w-full py-3 px-4 text-lg font-semibold hover:bg-gray-700 transition-all"
    >
      Budget
    </Button>
  </div>
</div>


      {/* Main Content */}
      <div className="flex-1 p-8 ml-64 bg-gray-50">
        {activeSection === 'dashboard' && (
          <div>
            <h1 className="text-4xl font-semibold mb-6 text-gray-800">📊 Dashboard</h1>
            <p className="text-lg text-gray-600 mb-8">Here's an overview of your finances.</p>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <Card className="bg-green-50 shadow-xl rounded-xl p-6">
                <CardContent>
                  <h2 className="text-xl font-semibold text-green-700">Total Income</h2>
                  <p className="text-3xl font-bold text-green-900">₹1200</p>
                </CardContent>
              </Card>
              <Card className="bg-red-50 shadow-xl rounded-xl p-6">
                <CardContent>
                  <h2 className="text-xl font-semibold text-red-700">Total Expenses</h2>
                  <p className="text-3xl font-bold text-red-900">₹800</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 shadow-xl rounded-xl p-6">
                <CardContent>
                  <h2 className="text-xl font-semibold text-blue-700">Net Balance</h2>
                  <p className="text-3xl font-bold text-blue-900">₹400</p>
                </CardContent>
              </Card>
            </div>

            {/* Bar Chart */}
            <Card className="shadow-xl rounded-xl p-6 mb-8">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Income vs Expenses</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sampleData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'transactions' && (
          <div>
            <h1 className="text-4xl font-semibold mb-6 text-gray-800">💸 Transactions</h1>
            <p className="text-lg text-gray-600 mb-8">Here’s a list of your recent transactions.</p>

            {/* Transaction List */}
            <div className="space-y-6">
              {sampleTransactions.map((transaction) => (
                <Card key={transaction.id} className="bg-white shadow-xl rounded-xl p-6">
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-semibold text-gray-800">{transaction.description}</span>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                      <span className="text-xl font-bold text-gray-900">₹{transaction.amount}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'budget' && (
          <div>
            <h1 className="text-4xl font-semibold mb-6 text-gray-800">💼 Budget</h1>
            <p className="text-lg text-gray-600 mb-8">Here's an overview of your budget vs actual expenses.</p>

            {/* Budget List */}
            <div className="space-y-6">
              {sampleBudget.map((item) => (
                <Card key={item.category} className="bg-white shadow-xl rounded-xl p-6">
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">{item.category}</span>
                      <div className="space-x-4 text-gray-500">
                        <span className="text-sm">Budgeted: ₹{item.budgeted}</span>
                        <span className="text-sm">Spent: ₹{item.spent}</span>
                      </div>
                    </div>
                    <div className="mt-2 h-1 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-500"
                        style={{
                          width: `${(item.spent / item.budgeted) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
