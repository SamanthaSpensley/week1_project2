//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.

//console.log("Question 1");
//console.log(yourAnswer);

var iceCream = [];
iceCream.push('chocolate', 'vanilla', 'salted orea', 'hazelnut');
console.log(iceCream);


// 2. Add an additional item to the beginning of your Array.

iceCream.unshift('strawberry');
console.log(iceCream);

    //["strawberry", "chocolate", "vanilla", "salted orea", "hazelnut"]

// 3. Remove the second and third items.
iceCream.splice(1,2);
console.log(iceCream);

    //["strawberry", "salted orea", "hazelnut"]

// 4. Add two new items after the second item.
iceCream.splice(2,0, 'caramel', 'cookies n cream');
console.log(iceCream);

    //["strawberry", "salted orea", "caramel", "cookies n cream", "hazelnut"]

// 5. Write 'The current length of the array is....' using the .length method

console.log('The current length of the array is ' + iceCream.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things.splice(2,1, 'keyboard');
console.log(things);
    
    //["mug", "book", "keyboard", "plant", "sunglasses"]

// 7. Combine all of the elements of the array into a string.
var string = things.join();
console.log(string);

    //mug,book,keyboard,plant,sunglasses

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.
var lastItem = [things.pop()];
console.log(lastItem);
    //["sunglasses"]

    //var lastItem = new Array(things.pop());

    //var lastItem = things.pop(); another creative option
    //lastItem = lastItem.split();
    //console.log(lastItem);
    //["sunglasses"]

    //var ssn = "384-09-9879";
    //snn.split("-");
    //["384", "09", "9879"];

lastItem.push('chair');
lastItem.unshift('dog');
console.log(lastItem);
    //["dog", "sunglasses", "chair"]

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
var itemLast = lastItem.reverse();
console.log(itemLast);
    //["chair", "sunglasses", "dog"]

// 10. Remove the first item of itemLast.
itemLast.shift();
console.log(lastItem);
    //["sunglasses", "dog"]

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
var itemLast = [];
console.log(itemLast);

    //itemLast.splice(0,itemLast.length);


// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var numberPets = [firstArray + ',' + secondArray];
    //["12,5,9,27,fish,dog"] no spaces?

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
people.push('Bob', 'Steph');
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'
people.shift();
people.splice(1,1);
people.splice(2,3);
console.log(people);
    //["Ted", "Andrea"]


// 15. Add a new person to the beginning of the Array
people.unshift('Sam');
console.log(people);
    //["Sam", "Ted", "Andrea"]

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
people.sort();
console.log(people);


// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var bigArray    = [array1, array2, array3];
console.log(bigArray);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]



// 18. Remove "Sparky" and "White" from the above array of arrays.
array1.splice(3,1);
array3.splice(0,1);
console.log(bigArray);
    

// array4[0].pop();
// array4[2].shift();


// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.

sortingNumbers.sort();
console.log();

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
array1.splice(2,1);
array1.splice(4,1);
array1.sort().unshift(array1.pop());
array1.push(17);


console.log(array1);




//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];


















