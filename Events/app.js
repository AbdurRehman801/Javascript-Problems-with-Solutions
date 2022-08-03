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

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
// function adding() {
//   var table = document.getElementById("table");
//   newRow = table.insertRow(table.length);
//   cell1 = newRow.insertCell(0);
//   cell2 = newRow.insertCell(1);
//   cell3 = newRow.insertCell(2);
//   cell4 = newRow.insertCell(3);
//   cell5 = newRow.insertCell(4);
//   var fname = document.getElementById("fname").value;
//   var lname = document.getElementById("lname").value;
//   var classes = document.getElementById("class").value;
//   removeButton = "<button>Remove</button>";
//   editButton = "<button>Edit</button>";
//   cell1.innerHTML = fname;
//   cell2.innerHTML = lname;
//   cell3.innerHTML = classes;
//   cell4.innerHTML = removeButton;
//   cell5.innerHTML = editButton;
//   editing();
//   deletion();
// }

// function editing() {
//   table = document.getElementById("table");
//   for (var i = 0; i < table.rows.length; i++) {
//     table.rows[i].cells[4].onclick = function (e) {
//       var data = e.path[2];
//       document.getElementById("fname").value = data.cells[0].innerHTML;
//       document.getElementById("lname").value = data.cells[1].innerHTML;
//       document.getElementById("class").value = data.cells[2].innerHTML;
//     };
//   }
// }
// editing();
// function deletion() {
//   var index,
//     table = document.getElementById("table");
//   for (var i = 1; i < table.rows.length; i++) {
//     table.rows[i].cells[3].onclick = function () {
//       index = this.parentElement.rowIndex;
//       table.deleteRow(index);
//     };
//   }
// }
// deletion();

// function firstFunction(){
//   var a = document.getElementById("modal-1");
//   a.style.display = "block";
//   a.style
// }
// function secondFunction(){
//   var a = document.getElementById("modal-2");
//   a.style.display = "block";
// }
// function thirdFunction(){
//   var a = document.getElementById("modal-3");
//   a.style.display = "block";
// }
// function fourthFunction(){
//   var a = document.getElementById("modal-4");
//   a.style.display = "block";
// }
// function closeFunction1(){
//   var b = document.getElementById("modal-1");
//   b.style.display = "none";
// }
// function closeFunction2(){
//   var b = document.getElementById("modal-2");
//   b.style.display = "none";
// }
// function closeFunction3(){
//   var b = document.getElementById("modal-3");
//   b.style.display = "none";
// }
// function closeFunction4(){
//   var b = document.getElementById("modal-4");
//   b.style.display = "none";
// }
