/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    addAndUpdate(result, transactions[i]["category"], transactions[i]["price"]);
  }
  return result;
}
function addAndUpdate(arr, category, priceToAdd) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["category"] === category) {
      arr[i]["totalSpent"] += priceToAdd;
      return;
    }
  }

  const val = {
    category,
    totalSpent: priceToAdd
  };
  arr.push(val);
}

module.exports = calculateTotalSpentByCategory;
