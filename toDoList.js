//initialize prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

//create an array to store the to do items
var toDoItems = [];

//ask the user how many items they want to add in the list
let numberOfItems = prompt("How many items do you want to add in the list?\t");

//if the number is greater than 10, have them re-pick
while (numberOfItems > 10) {
  numberOfItems = prompt("Please enter a number less than 10.\t");
}

//ask the user to enter items until the list is full
for (var i = 0; i < numberOfItems; i++) {
  //ask the user to enter an item
  let item = prompt("Enter To-Do item #" + (i + 1) + ":\t");
  //if the item is already in the list, have them enter another item
  if (toDoItems.includes(item)) {
    alert("This item is already in the list. Please enter another item.\t");
    i--;
  } else {
    //add the item to the list
    toDoItems.push(item);
  }
}
console.log();

//print the list
console.log("To-Do List:");
for (var i = 0; i < toDoItems.length; i++) {
  console.log(i + 1 + ". " + toDoItems[i]);
}
