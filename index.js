var num1 = false;
// var num2 = 10;

// console.log(typeof(num1))

// var num2 = 5
// console.log(typeof(num2))


//should not be numeric
//should not contain special char
// can be a word/letter
// special chars allowed == _,$

//num = -50, 50, 0, 1.1, -1.1, Infinity, -infinity, NaN
//string = "", '', "''", '""'
//boolean = true, false
//Bigint
//undefined

//objects = []

// var a = 5;
// var b = 7;

// var result = a+b;


// var x = 3;
// var y= 5

// var result = x+y


//Functions (hoisting)

//JS is not a strictly typed language

//Function Declaration
//function decaltions are hoisted

// function add(num1 = 0, num2 = 0) {
//     // console.log('Hi i will add 2 numbers')
//     var x = num1;
//     var y= num2;
//     var result = x+y;
//     return result
// }


// console.log(add("aviral", 5))


//function expression
// console.log(substract(3, 5))
// var substract = function (num1 = 0, num2 = 0) {
//     var x = num1;
//     var y= num2;
//     var result = x-y;
//     return result
// }

// console.log(substract(3, 5))

// console.log(substract()) // undefined
// var substract = function (num1 = 0, num2 = 0) {
//         var x = num1;
//         var y= num2;
//         var result = 10;
//         return result
//     }
// console.log(substract()) //fn


//IIFE (iMMEDEATLY INVOKED FUNCTION EXPRESSION)
//scopes 
//arrow function(this concept)
// var num1 = (function(num1, num2) {
//     console.log(num1+num2)
//     console.log('hi i will add 2 function')
//     return 5
// })(1,2)

// var num2= (function(num1, num2) {
//     console.log(num1+num2)
//     console.log('hi i will add 2 function')
//     return 5
// })(1,2)

// console.log(num)

// var $ = "aviral"

// console.log('this line will execute')
// console.log(add())

// a) error
// b) 1
// c) nan
// d) none of these

// var x = add
//default parameter
// console.log(add(1,9))

// console.log(add());
// console.log(add())
// var Vipul = add();
// console.log(Vipul)

// console.log('Hi my name is Ravi')
// add()


//HOISTINGGGGG
//moves variable decalaration to the top;
// BUTTTTTT does not assign it any value

// var a = 5;
// var name1;
// console.log(a)


// var b = 6;
// console.log(b)






// name1 = "aviral"
// console.log("aviral")
// var name1;
// console.log(name1)



// console.log(name1) //undefined

// var name1 = "aviral"

// console.log(name1)  //aviral

//var ka scope hai functional/ global
// 3 types of scope ===> global, functional, block


// window object: global ===>  
// functional ===> functional () {// scope}
// block ====> if(true){// block scope}
// var name1 = "aviral"
// var name1 = "aviral" 

// function getName2() {
//     var name1  =  "vaishali"

//     getName(name2)
// }


// function getName(x) {
//     console.log(x)
// }
// // console.log(name2)
// getName()
// console.log(a)
// var a = 9;

//is function a block????
//is block a function??

// function abc() {
//     var a; 
//     console.log(a);
//     a = 12;
//     if(true) {
//         a = 11
//         console.log(a);
//     }
//     console.log(a) //3
// }

// let and const === block


// var abc = function() {
//     var a;
//     console.log(a); // 1
//     a = 12;
//     function xyz() {
//         var a;
//         a = 11
//         console.log(a); //2
//     }
//     xyz()
//     console.log(a) //3
//     return "aviral"
// }

// console.dir(abc)

// var name1 = "aviral";

// console.log(name1)

// let name = "aviral"

// // if(true) {
// //     console.log(name1)
// // }

// // function getName() {
// //     if(true) {
// //         console.log(name1)
// //         let name1 = "Onkar"
// //         console.log(name1)
// //     }
// // }
// // getName()

// // console.log(name1)

// // function getNum1(x) {
// //     console.log(x);
// //     // x()
// //     x();
// // }

// // function getNum2() {
// //     return function getNum3() {console.log('this is return statemtn')};
// // }
// // getNum1(getNum2())

// function formalGreeting() {
//     console.log("how are you?")
// }

// function casualGreeting() {
//     console.log("kaise ho?")
// }
// // higher order function
// // 
// function actualGreetin(type,x,y= function() {console.log('hi')}){
//     if(type === "formal") {
//         x()
//     }else {
//         y()
//     }
// }
// actualGreetin("casual",formalGreeting, casualGreeting)



//DRY ===> DO NOT REPAET YOURSEF

//FUNCTIONAL PROGRAMING
// SEPARATION OF CONCERN
// function add(x,y) {
//     return x+y
// }

// function advanceAdd(x) {
//    let result =  x();

// if(result<10) {
//     console.log('ho gaya')
// } else {
//     console.log("nahi hoga")
// }
// }

// advanceAdd(add)
// var name1 = "aviral"

// function abc() {
//     let x = "ankita"
//     let y = "Ankit"
//     function def() {
//         var z = "Tarun"
//         function ghi() {
//             console.log(x)
//         }
//         console.dir(ghi)
//     }
//     console.dir(def)
//     def()
// }

// abc()











