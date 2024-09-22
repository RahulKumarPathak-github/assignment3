function calculateTotalPrice(items) {
    let total = 0;
    
    items.forEach(item => {
      total += item.price;
    });
  
    return total;
  }
  
  // Example usage:
  const orderItems = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 15 },
    { name: "Item 3", price: 20 }
  ];
  
  console.log(calculateTotalPrice(orderItems)); // Output: 45