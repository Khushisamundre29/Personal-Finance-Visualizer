// In your Dashboard component (using Tailwind CSS for styling)
import { useEffect, useState } from 'react';

type Transaction = {
  _id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
};

type DashboardProps = {
  transactions: Transaction[];
};

export default function Dashboard({ transactions }: DashboardProps) {
  const [data, setData] = useState<Transaction[]>(transactions);

  useEffect(() => {
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Personal Finance Visualizer</h1>
        <p className="mt-2 text-lg text-gray-600">Track your expenses and manage your budget</p>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Expenses Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Total Expenses</h2>
          <p className="mt-2 text-3xl font-bold text-red-600">₹5000</p>
        </div>

        {/* Remaining Budget Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Remaining Budget</h2>
          <p className="mt-2 text-3xl font-bold text-green-600">₹3000</p>
        </div>

        {/* Category Breakdown Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Category Breakdown</h2>
          <div className="text-center mt-4">
            <div className="w-full h-48 bg-blue-100 rounded-lg"></div> {/* Placeholder for Pie Chart */}
          </div>
        </div>
      </div>

      {/* Monthly Expenses Chart */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Monthly Expenses</h2>
        <div className="w-full h-64 bg-blue-100 rounded-lg mt-4"></div> {/* Placeholder for Bar Chart */}
      </div>

      {/* Recent Transactions List */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Recent Transactions</h2>
        <ul className="mt-4 space-y-4">
          {data.map((txn) => (
            <li key={txn._id} className="flex justify-between items-center p-3 border-b">
              <div>
                <p className="font-semibold text-gray-800">{txn.description}</p>
                <p className="text-sm text-gray-500">{txn.category}</p>
              </div>
              <p className="font-semibold text-gray-800">₹{txn.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
