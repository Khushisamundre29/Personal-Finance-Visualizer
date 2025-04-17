'use client';
import TransactionList from "@/components/TransactionList";
import TransactionForm from "@/components/TransactionForm";
import CategoryPieChart from "@/components/CategoryPieChart";

export default function Transactions() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-teal-600 mb-4">Transactions</h1>
      <p className="text-lg text-gray-700 mb-6">Here you can manage your transactions and keep track of your spending.</p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-teal-600">Transaction List</h3>
        {/* Example of a Transaction */}
        <div className="flex justify-between border-b pb-3 mb-3">
          <p className="text-lg text-gray-700">Groceries</p>
          <p className="text-lg text-teal-600">$50.00</p>
        </div>
        <div className="flex justify-between border-b pb-3 mb-3">
          <p className="text-lg text-gray-700">Electricity Bill</p>
          <p className="text-lg text-teal-600">$120.00</p>
        </div>
      </div>
    </div>
  );
}
