//1. Create a variable that contains the string "Hello World". Display the position of the first occurrence of "World" in the variable.
let greetings = "Hello World";
let worldStrg = greetings.substring(6);
console.log(worldStrg);

/*2. Using the variable from exercise 1, Use the replace() method to replace "World" with "Universe".
*/
let rplWorld = greetings.replace("World", "Universe");
console.log(rplWorld);


//3. Convert the value of the variable in exercise 1 to upper case.
console.log(greetings.toLocaleUpperCase());

//​4. Convert the value of the variable in exercise 1 to lower case.
console.log(greetings.toLocaleLowerCase());

/* ​5. Create a variable that contains the string "Hello" and another variable that contains the string "World". Use the concat() method to join the two strings in these variables.
*/
let letter1 = "Hello";
let letter2 = "World";
let letter3 = letter1.concat(" ", letter2);
console.log(letter3);

/*
6. Create a variable that contains the string "Rome,Berlin,Paris". 
   Now take out only the portion that says "Berlin"
   Now take out only the portion that says "Berlin,Paris", add a space between the 2 cities and remove the comma (all in 1 go).
*/
const CITY = "Rome, Berlin, Paris";
let port1 = CITY.substring(6, 12);
console.log(port1);
let moreText = CITY.substring(6).replace("Berlin, Paris", "Berlin Paris");
console.log(moreText);

/*
7. Create a template string according to the following example: 
​
`const a = "John";
const b = "Joe";
const c = "Jack";
const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."`
*/
const FRSTNAME = "Ifeoma";
const SCDNAME = "Agnes";
const LNAME = "Ani";
console.log(`Their names were ${FRSTNAME} ${SCDNAME} ${LNAME}`);

//8. Create a variable that contains the string "whatTheOMGnicCAGEtadahheHIDINGinHere". Console log the index of where Nic Cage is hiding. 
let searchTxt = "whatTheOMGnicCAGEtadahheHIDINGinHere";
let remove1 = searchTxt.substring(10, 13).replace("nic", "Nick");
console.log(remove1);
let remove2 = searchTxt.substring(13, 17).replace("CAGE", "Cage");
console.log(remove2);
let sum = `${remove1} ${remove2};`
console.log(sum);
let findIndex = sum.indexOf("Nick");
let findIndex2 = sum.indexOf("Cage");
console.log(findIndex);
console.log(findIndex2);


//9. What is the difference between substr(), substring(), and slice()?

//The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. 
//slice() extracts parts of a string and returns the extracted parts in a new string. 
//substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

/*
10. Create a variable called planet and assign the value of 'earth'
    Capitalize the first letter and print "Earth" to the console 
    IMPORTANT: you should only use 2 variables (planet and nameCapitalized)
*/
let planet = "earth";
let firstLetter = planet[0].toLocaleUpperCase();
let ignore = planet.slice(1)
console.log(firstLetter + ignore);

/*11. Create a variable called testString2 and assign the following value “  I love this stuff  ”
Now remove spaces at the start and at the end */
let testString2 =  " I love this stuff ";
let closeGap = testString2.trim();
console.log(closeGap);