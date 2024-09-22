const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Utilities' },
    { amount: 150, category: 'Entertainment' },
    { amount: 75, category: 'Groceries' },
    { amount: 50, category: 'Groceries' }
  ];
  
  function categorizeExpense(expense) {
    return expense.amount > 100 ? "High Expense" : "Low Expense";
  }
  
  const categorizedExpenses = expenses.map(expense => categorizeExpense(expense));
  
  console.log(categorizedExpenses);