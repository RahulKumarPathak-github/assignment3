const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Utilities' },
    { amount: 150, category: 'Entertainment' }
  ];
  
  const taxRate = 0.10;
  
  const expensesWithTax = expenses.map(expense => {
    return {
      ...expense, // Keep the existing properties
      tax: expense.amount * taxRate // Calculate the tax
    };
  });
  
  console.log(expensesWithTax);