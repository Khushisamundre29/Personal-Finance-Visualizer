// components/CategoryPieChart.tsx

'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const CategoryPieChart = () => {
  const [categoryData, setCategoryData] = useState<any[]>([]);

  // Fetch the aggregated data from the backend
  useEffect(() => {
    const fetchCategoryData = async () => {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      setCategoryData(data);
    };

    fetchCategoryData();
  }, []);

  // Define a color palette for the chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF3333'];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Category-wise Expenses</h2>
      
      {/* Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={categoryData}
          dataKey="totalAmount"   // Total amount of each category
          nameKey="_id"           // Category name
          cx="50%"                // Center X of the chart
          cy="50%"                // Center Y of the chart
          outerRadius={150}      // Size of the outer radius
          fill="#8884d8"
          label
        >
          {categoryData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CategoryPieChart;
