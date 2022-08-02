// 1. Create a signup form and display form data in your web
// page on submission.

// function submission(){
//     var firstName = document.getElementById("fname").value;
//     var lastName = document.getElementById("lname").value;
//     var age = document.getElementById("age").value;
//     var qualification = document.getElementById("qualification").value;

//     document.write(firstName);
//     document.write(lastName);
//     document.write(age);
//     document.write(qualification)

// }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function seeMore(){
//     var seeMore1 = document.getElementById("seeButton")
//     var hiding = document.getElementById("hide");
//     var hideButton = document.getElementById("hideButton")
//     hiding.style.display = "inline";
//     seeMore1.style.display = "none";
//     hideButton.style.display = "block";
// }
// function hideLess(){
//     var hideButton = document.getElementById("hideButton")
//     var hiding = document.getElementById("hide");
//     var seeMore1 = document.getElementById("seeButton")
//     hiding.style.display = "none";
//     seeMore1.style.display = "block";
//     hideButton.style.display = "none"
// }

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

// var name1 = document.getElementById("name").value;
// var fatherName = document.getElementById("fatherName").value;
// var table = document.getElementById("table");

// second session

// function purchase(){
//     alert("Your Phone has been booked")
// }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

//   var index, table = document.getElementById("table");
//   for (var i =1; i<table.rows.length; i++){
//     table.rows[i].cells[3].onclick = function(){
//         index = this.parentElement.rowIndex;
//         table.deleteRow(index);
//     }
//   }

// var counter = document.getElementById("counter");
// var plusButton = document.getElementById("plusButton");
// var minusButton = document.getElementById("minusButton");

// var count = 0;
// update();

// function plusFunction() {
//   count++;
//   update();
// }
// function minusFunction() {
//   count--;
//   update();
// }
// function update(){
//     counter.innerHTML = count;
// }

// var a = document.getElementById("para");
// var hello = a.style.fontSize
// // console.log("hello",hello)
// = "10px";

// function increamentFunction() {
//   var el = document.getElementById("para");
//   var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
//   var fontSize = parseFloat(style);
//   el.style.fontSize = fontSize + 10 + "px";
// }
// function decreamentFunction() {
//   var el = document.getElementById("para");
//   var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
//   var fontSize = parseFloat(style);
//   el.style.fontSize = fontSize - 10 + "px";
// }

