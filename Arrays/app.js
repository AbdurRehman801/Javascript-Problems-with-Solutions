//1.Declare an empty array using JS literal notation to store
// student names in future.

// var arr1 = [];
// arr1.push("john", "tom")
// alert(arr1);

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr2 = [];
// arr2.push("john", "tom")
// alert(arr2);

// 3. Declare and initialize a strings array.

// var arr3 = ["Hello", "World", "Galaxy", "Universe"];
// alert(arr3);

// 4. Declare and initialize a numbers array

// var arr4 = [1,2,3,4,5,6,7,8,9];
// alert(arr4);

// 5. Declare and initialize a boolean array

// var arr5 = [true, false];
// alert(arr5);

//6. Declare and initialize a mixed array.

// var arr6 = ["Hello World", 2885, true];
// alert(arr6);

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

// var arr7 = ["zong", "ufone", "telenor", "Jazz", "Warid"];
// alert(arr7);

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:

// var arr8 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("Qualifications: <br>");
// for (var i = 0; i < arr8.length; i++) {
//   document.write(`${[i+1]}) ${arr8[i]} <br>`);
// }

// 9.Declare and initialize an empty array to store top movies of
// 2015.  Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

// var arr9 = [];
// arr9.push("Avengers: Age of Ultron", "Spectre", "Jurassic World", "Inside Out");
// document.write("Top Movies of 2015 <br>");
// document.write(`1) ${arr9[0]} <br>`)
// document.write(`2) ${arr9[1]} <br>`)
// document.write(`3) ${arr9[2]} <br>`)
// document.write(`4) ${arr9[3]} <br>`)
// document.write(`Length of an array ${arr9.length}`)

// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c.  Last index of the array
// d. Car at last index of the array

// var arr10 = ["Audi", "Volvo", "Ford", "Lamborghini"];

// document.write(`Favorite Cars <br>`);
// document.write(`${arr10} <br>`);
// document.write(`First index of an array ${arr10.indexOf("Audi")} <br>`);
// document.write(`Car at first index of the array: ${arr10[0]} <br>`);
// document.write(`Last Index of the array ${arr10.length - 1} <br>`);
// document.write(`Car at Last Index of the array: ${arr10[3]} <br>`);

// 11.  Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:

// var arr11 = ["Micheal", "John", "Tony"];
// var arr112 = [320, 230, 480];

// for (var i = 0; i < arr11.length; i++) {
//   document.write(
//     `Score of ${arr11[i]} is ${arr112[i]}. Percentage ${
//       (arr112[i] * 100) / 500
//     } % <br>`
//   );
// }

// 12.  Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c.  Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d.Delete the first color in the array. Display the updated
// array in your browser.
// e.  Delete the last color in the array. Display the updated
// array in your browser.
// f.  Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser

// var colorNames = ["Yellow", "Red", "Brown", "Orange"];
// colorNames.unshift("Black");
// document.write(colorNames, "<br>");
// colorNames.push("white");
// document.write(colorNames, "<br>");
// colorNames.unshift("Blue", "Purple");
// document.write(colorNames, "<br>");
// colorNames.shift();
// document.write(colorNames, "<br>");
// colorNames.pop();
// document.write(colorNames, "<br>");
// colorNames.splice(2, 0, "teal", "offwhite");
// document.write(colorNames, "<br>");
// colorNames.splice(2, 2);
// document.write(colorNames, "<br>");

// 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

// var arr13 = [320, 230, 480, 120];
// document.write(`Score of Students ${arr13} <br>`)
// arr13.sort();
// document.write(`Ordered Scores of Students ${arr13}`);

// 14. Write a program to sort the below mentioned array:
// var fruits = ["stawberry", "apple", "orange", "banana"];
// document.write(`Fruits List: ${fruits} <br>`)
// fruits.sort();
// document.write(`Ordered Fruits List ${fruits}`);`

// 15. Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array.

// var arr15 = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write(`Cities List ${arr15} <br>`);
// var arr152 = arr15.slice(2, 4);
// document.write(arr152);

// 16. Write a program to create a single string from the below
// mentioned array:

// var arr16 = ["this", "is", "my", "cat"];
// document.write(`${arr16} <br>`);
// var arr162 = arr16.join(" ");
// document.write(`String ${arr162}`)

// 17.  Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)

// var arr17 = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write(`Devices <br> ${arr17} <br>`);
// for (var i = 0; i < arr17.length; i++) {
//   document.write(`Out: <br> ${arr17[i]} <br>`);
// }
// document.write(`Devices <br> ${arr17} <br>`);
// document.write(`Out: <br> ${arr17[3]} <br>`);
// document.write(`Out: <br> ${arr17[2]} <br>`);
// document.write(`Out: <br> ${arr17[1]} <br>`);
// document.write(`Out: <br> ${arr17[0]} <br>`);

// 19. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
//     the following dropdown/select menu in your browser using
//     document.write() method:

// var items = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i=0; i<items.length; i++){
//     document.write(`<option>${items[i]}</option>`)
// }
// document.write("</select>")


// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multiArr = [[]];

// 21. Declare and initialize a multidimensional array representing
// the following matrix:

// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var i = 0; i < matrix.length; i++) {
//     for(var j=0; j<matrix[i].length; j++){
//         document.write(`${matrix[i][j]}`)
//     }
//     document.write("<br>")
// }
