/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = function greedyCoinCounterCalculator(amount) {
  if (amount > 100.0) {
    return "Error: the number is too large";
  }
  if (amount < 0) {
    return "Error: the number is negative";
  }

  // Initialize coin counts (dictionary so we can send back as an object)
  let coinValues = {
    dollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  // Convert amount to cents to avoid floating point issues
  let remainingAmount = Math.round(amount * 100);

  // Greedily allocate coins
  if (remainingAmount >= 100) {
    coinValues["dollar"] += Math.floor(remainingAmount / 100);
    remainingAmount = remainingAmount % 100;
  }
  if (remainingAmount >= 25) {
    coinValues["quarter"] += Math.floor(remainingAmount / 25);
    remainingAmount = remainingAmount % 25;
  }
  if (remainingAmount >= 10) {
    coinValues["dime"] += Math.floor(remainingAmount / 10);
    remainingAmount = remainingAmount % 10;
  }
  if (remainingAmount >= 5) {
    coinValues["nickel"] += Math.floor(remainingAmount / 5);
    remainingAmount = remainingAmount % 5;
  }
  if (remainingAmount >= 1) {
    coinValues["penny"] += remainingAmount;
    remainingAmount = 0;
  }

  return coinValues;
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(0.99));
// $0.99 ==> 3 quarters, 2 dimes, 4 pennies
console.log(calculateChange(2.34));
// $2.34 ==> 2 dollars, 1 quarter, 1 nickel, 4 pennies
console.log(calculateChange(0.0));
// $0.00 ==> no coins
console.log(calculateChange(100.0));
// $100.00 ==> 100 dollars
console.log(calculateChange(-73.58));
// $-73.58 ==> Error: the number is negative
