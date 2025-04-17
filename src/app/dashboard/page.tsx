'use client';

import Navbar from '@/components/ui/Navbar'; 
import { Card, CardContent } from '@/components/ui/card';
import Button from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 12000, expenses: 6000, savings: 3000 },
  { name: 'Feb', income: 14000, expenses: 8000, savings: 2000 },
  { name: 'Mar', income: 16000, expenses: 9000, savings: 3000 },
  { name: 'Apr', income: 18000, expenses: 9500, savings: 4000 },
  { name: 'May', income: 20000, expenses: 11000, savings: 4500 },
  { name: 'Jun', income: 22000, expenses: 12000, savings: 5000 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar (Navbar) */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Input placeholder="Search transactions..." className="w-[300px]" />
          </div>
          <Button className="bg-teal-600 text-white">+ Add Transaction</Button>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Total Income</p>
              <p className="text-2xl font-semibold text-teal-600">$88,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Total Expenses</p>
              <p className="text-2xl font-semibold text-red-500">$49,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Savings</p>
              <p className="text-2xl font-semibold text-green-600">$17,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Completion Rate</p>
              <p className="text-2xl font-semibold text-blue-600">60%</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart + Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Financial Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="income" fill="#0d9488" />
                  <Bar dataKey="expenses" fill="#f87171" />
                  <Bar dataKey="savings" fill="#34d399" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Status Summary</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Budgeted Categories: <span className="font-medium text-gray-900">4</span></p>
                <p>Over Budget: <span className="font-medium text-red-500">1</span></p>
                <p>Under Budget: <span className="font-medium text-green-600">3</span></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
