const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Utilities' },
    { amount: 150, category: 'Entertainment' },
    { amount: 75, category: 'Groceries' },
    { amount: 50, category: 'Groceries' }
  ];
  
  const groceriesExpenses = expenses.filter(expense => expense.category === 'Groceries');
  
  console.log(groceriesExpenses);