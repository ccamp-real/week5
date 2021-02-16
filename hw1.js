var food = ["okra", "carrots", "kale", "spinach", "onion", "apples", "bananas", "grapes", "oranges"];

//Remove One Element from End of Array
food.pop();

console.log(food);

//Add Strawberries on End of Array

food.push("strawberries");

console.log(food);

//Remove One Element From Front of Array

food.shift();

console.log(food);

//Adding broccoli on Front of Array

food.unshift("broccoli");

console.log(food);

//Creating Veggies Array

var veggies = food.slice(0, 5);

console.log(veggies);

//Creating Fruit Array

var fruit = food.slice(5,9);

console.log(fruit);

//Removing Onion

food.splice(4,1);

console.log(food);

//Removing Kale and Spinach and Replacing with Brussel Sprouts

food.splice(2,2, "brussel sprouts");

console.log(food);

//Creating Var Text

var text = "lorem, ipsum dolor sit amet consectetur adipiicing elit.";

//Console.log-ing the ','

console.log(text[5]);

//Console.log-ing the '.'
var pos = text.indexOf(".");
console.log(pos);

console.log(text[55]);

//Creating lorem

var lorem = text.slice(0,5);

console.log(lorem);

//Creating Chores1

var chores1 = "clean, pay bills, groceries";

//Creating Chores2

var chores2 = "learn JS, doctors office, pick up kids ";

//Creating allchores array

var allchores = chores1 + "," + chores2;

console.log(allchores);

var allchores = allchores.split(",");

console.log(allchores);

