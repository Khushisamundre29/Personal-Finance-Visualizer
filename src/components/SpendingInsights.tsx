'use client';

import React from 'react';

interface Insight {
  category: string;
  budget: number;
  actual: number;
  difference: number;
}

interface SpendingInsightsProps {
  budgetData: Array<{ category: string; amount: number }>;
  spendingData: { [key: string]: number };
}

const SpendingInsights: React.FC<SpendingInsightsProps> = ({ budgetData, spendingData }) => {
  const insights: Insight[] = budgetData.map((budget) => {
    const actualSpending = spendingData[budget.category] || 0;
    const difference = actualSpending - budget.amount;
    return {
      category: budget.category,
      budget: budget.amount,
      actual: actualSpending,
      difference,
    };
  });

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Spending Insights</h2>
      <ul>
        {insights.map((insight, index) => (
          <li key={index} className="mb-4">
            <strong>{insight.category}</strong>: <br />
            Budgeted: ${insight.budget} | Actual: ${insight.actual} <br />
            {insight.difference > 0 ? (
              <span className="text-red-500">Exceeded budget by ${insight.difference}</span>
            ) : (
              <span className="text-green-500">Under budget by ${Math.abs(insight.difference)}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingInsights;
