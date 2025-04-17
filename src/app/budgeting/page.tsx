'use client';

import BudgetForm from "@/components/BudgetForm";
import ExpenseChart from "@/components/ExpenseChart";

export default function Budgeting() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-teal-600 mb-4">Budgeting</h1>
      <p className="text-lg text-gray-700 mb-6">Set and track your budgets for a more organized financial life.</p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-teal-600">Monthly Budget</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-700">Total Budget</p>
          <p className="text-lg text-teal-600">$2000</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-700">Spent</p>
          <p className="text-lg text-teal-600">$1200</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-700">Remaining</p>
          <p className="text-lg text-teal-600">$800</p>
        </div>
      </div>
    </div>
  );
}
