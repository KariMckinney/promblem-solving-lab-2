//Create an array with 5 of your favorite foods.
//Log the first and last food in the array.
//Add one more food using .push() and log the new array.

let favoriteFood = ["Sushi", "Burgers", "Fries", "Seafood"]
console.log(favoriteFood[0])
console.log(favoriteFood[3])
favoriteFood.push("steak")
console.log(favoriteFood)

//Create an array with a list of guests.
//Remove the first guest using .shift()
//Add a new guest at the end using .push()
//Log how many guests are coming (.length)

let guests = ["guest1", "guest2", "guest3", "guest4"]
guests.shift("guest2")
guests.push("guest5")
console.log(guests.length)

//Create an array:
//let tasks = ["laundry", "groceries", "coding", "naps"];
//Write a function called printTasks() that loops through the array and logs each task.
//Bonus: Log them numbered (e.g. 1. laundry, 2. groceries)

let tasks = ["laundry", "groceries", "coding", "naps"];

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}

//Create this array:
//let numbers = [1, 2, 3, 4, 5];
// Manually reverse it by looping (don’t use .reverse()!)
// Log the result

let numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i > 0; i--) {
    console.log(numbers[i]);
  }
  
  numbers.reverse(numbers[4]); 
  console.log(numbers);