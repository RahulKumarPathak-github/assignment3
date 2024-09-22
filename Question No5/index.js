const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Utilities' },
    { amount: 150, category: 'Entertainment' },
    { amount: 75, category: 'Groceries' },
    { amount: 50, category: 'Groceries' }
  ];
  
  const totalAmount = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0); // Initialize accumulator with 0
  
  console.log(totalAmount);