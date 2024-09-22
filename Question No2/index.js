function printRandomNumbers() {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
      console.log(randomNumber);
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  
  // Call the function to start printing random numbers
  printRandomNumbers();