// var num1 = false;
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

// function abc() {
//     console.log('function 1')
// }
// function def() {
//     console.log('function 2')
// }
// def();

// abc();
// const i = 0;

// for (let i=0; i< 10; i++) {
//     console.log(i);
// }
// let age = 10;
// const name1 = null
// if(name1) {
//     let name1 = "Ravi"
//     console.log('true')
// } else {
//     console.log(name1)
//     console.log('fasle')
// }

// while loop and do while
// switch

// for..in
// for...each
// (age < 10) ? console.log('true') :  console.log('fasle')







// var x = {name:"Newton"}

// function greet(person){
//     if(person == x){
//         console.log('hey Newton');
//     }
//     else{
//         console.log('hey school');
//     }
// }

// greet(x)


// closure, callback, scope

// java is single thereded or multi?
// javascript is a single threded languge

// call stcks, queue, micro task, macro task

// function abc() {
//     console.log('line1') // 5sec
// }

// function def() {
//     console.log('line2') // 3sec
// }

// abc()
// def()

// function getDetail(x) {
//     console.log('details of the student')
//     x;
// }

// function getName() {
//     console.log("aviral")
//     console.log("Ravi")
//     console.log("Abhishek")
// }
// getName()
// // function getValue() {
// //     return 10;
// // }

// // getDetail( getValue() + 10 === 20)

// getDetail(getName())


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function setTimeout(myCallback,timer) {
//     let sum = num1 + num2;
//     myCalculator(sum);

    //execute myCallbackater timer
//   }
  
//   setTimeout(myCalculator, 5000);


// console.dir(window)
// function x() {
//     console.log('Hello')
// }

// setTimeout(x, 0)
// setInterval(x, 2000)
// console.log()
// function abc() {
//     setInterval(x, 1000)
// }
// var i = 2;
// var i = 3;
// let i = 1;
// let i = 2;
// let i =3
// var i;

//x ===>let i == 1
// x =====> let i =2

// var x;
// x ===> i == 2
// y ====> i == 2
// let i;
// for ( i = 1; i <= 2; i++) {
//     setTimeout(function() { console.log(i) }, 0);
// }

// for (let i = 1; i <= 2; i++) {
//     setTimeout(function() { console.log(i) }, 0);
// }

// function abc() {
//     console.log('1')
//     console.log('2')
//     setTimeout(function() { console.log('3') }, 1000);
//     console.log('4')
// }
// abc()

// var x = "string"
//objects 

// var x = {
//     name: "aviral",
//     age: 81,
//     isInstructor: true,
//     "Student name": "Manoj" ,
//     moreDetail: {
//         hairColor: "white"
//     }
// }

// // console.log(x.Student name)
// console.log(x["moreDetail"])
// console.log(x)

// //array
// var y = ["aviral", 81, true, {}, []]
// // var y = {
// //     0: "aviral",
// //     1: 82,
// //     2: true
// // }
// console.log(y)



// typeof undefined === typeof null


//    var b;
//    function outer() {
//   function inner() {
//     b++; // b = 
   
//     console.log(b) //1
//      b =4;
//      console.log(b) //2
//   }
//   console.dir(inner)
//   inner()
//    }
   
//    outer(); 

//ARraysssssss
// const arr = []
// console.log(typeof(arr))


// let obj = {}

// pass by value
// let name(mem --x) = "aviral";
// let name1(mem --- y ) = "aviral";
// name = "Yadav"
// console.log(name);
// console.log(name1)
// console.log(name === name1)


// Pass  by referance
// let arr(mem - x) = [1,2,3,4,5]
// let arr2 (mem --- x) = [1,2,3,4,5];
// arr[0] = 0;
// arr2[1] = 0;

// console.log(arr)
// console.log(arr2)
// let arr = [3,2,1]
// let arr2 = arr
// arr2 = [1,2,3];
// let arr = [1,5,3,4]
// arr[1] = 5
// arr = x


// console.log(arr, arr2)

// let arr1 = [];
// console.log(arr1)
// let arr = new Array(1,3,4,6)
// console.log(arr)
// console.dir(Array)


// let arr = [0,1,56, 56];
// arr[0] = 0;
// arr[1] = 1;
// arr[2] = 56;
// arr.push(65)
// arr[3] = 56;
// arr.push(45)
// arr.push(65)
// arr[length-1]
// arr.pop()
// arr.shift()
// arr.unshift()
// console.log(arr)


// let arr = [1,2,3,4,5,6]
// let res = [];
// let obj = {name: "aviral", age: 83}
// for(let i= 0 ; i< n ; i++) {
//     if(i === index) continue
//     res.push(arr[i])
// }

// delete arr[2];
// delete obj["name"]
// console.log(obj)
// console.log(arr[2])
// console.log(arr.length)

// [0,1,2,3]

// let arr = [1,2,3,4,5,6];

// slice and splice
//splice(index, number of elements)
// arr.splice(0,3);
// console.log(arr)
// console.log(arr.splice(-1))
// console.log(arr.slice(0,3))
// console.log(arr)

// let arr = [16,24,15,68,29,2];
// // let arr1 = ["z", "b", "a", "f", "g"]

// arr.sort((x,y) => x-y)
// console.log(arr)


// function (a,b) {
//     if(a<b) return -1
// }


//map, filter, reduce, for each, isArray.
// let arr = [1,2,3,4,5,6]

// for(let i=0; i<arr.length; i++) {
//     arr[i] = arr[i]*2
// }
// console.log(arr)

// let arr2 = arr.map((elem) => {
// console.log(arr,arr2);

// let arr3 = arr.filter((elem) => elem%2 !== 0)
// console.log(arr3)
// console.log(arr)

// let arr = {};
// console.log(Array.isArray(arr[i]))
// let arr = [1,2,3,[4,5,[6,7],8],9]
// console.log(arr.flat())
// flatten an array === recirrsion == medium level


//"aviral"   ===> "lariva"


// for(let i=0; i<str.length; ji++) {

// }

// let str = "aviral"
// str.split('').reverse().join('')
// str.reverse()  ======> not apply ===> works on array
// let a = [1,2,3,[4,5,[6,7],8],9];
// a.flat()


// function flatten(arr) {
//     return arr.map(eachElement => {
//             if(Array.isArray(eachElement)) {
//                 return flatten(eachElement)
//             }
//         return eachElement
//     }).join(',').split(',')
// }

// var res = flatten(a)
// console.log(res)


// map ====> return???
// let arr = [1,2,3,4]
// var result = arr.map(e => e*2)
// console.log(result)
// 10+1+2+3+4+5

// [1,2,3,4,5].reduce((previousValue, currentValue) => previousValue+currentValue , 10)



//ES6 introduce .. spread operator

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9]

// let arr = ["aviral", ...arr2, ...arr1, "srivastava"];

// console.log(arr)
// function abc (elem) {
//     return elem *2
// }

// // setTimeout(fn, 100)
// [1,2,3,4].map(function (E) { 
//    return E*2}
//     )
// Array,
// String
// Number
// Boolean
//ObJECTSSSSSS
// let obj = {};
// console.log(obj)
// var obj1 = new Object()
// console.log(obj1)


// let obj = {
//     name: 'Ravi',
//     age: 18,
//     isStudent: true,
//     attributes: {
//         hairColor: 'black',
//         eyeColor: 'Blue',
//     },
//     getAge: function(a) {
//         console.log(a)
//     },
// }


// if(obj && obj.attributes) {
//     obj.attributes.eyecolor
// }
// obj?.attributes.eyecolor
// optional channing

   
// console.log(typeof(obj.attributes.eyeColor.x.y))
// delete(obj.isStudent)
// console.log(obj)
    // obj.attributes.height = '171cm'
    // obj = {}
    // console.log(obj)
// console.log(obj.attributes.hairColor)
// obj.getAge('Aviral')
// console.log(Object.keys(obj)[2])
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// let obj1 = {name1: 'aviral'}
// let obj2 = {name2: 'Ravi', age: 20}

// let obj3 = {...obj1, ...obj2}
// obj3.age2 = 30
// console.log(obj3)


// const str = "aviral"
// str = "Yadav"

// const arr1 = [1,2,3,4]
// arr1[1] = 3
// console.log(arr1)


// const student1 = {
//     isStudent: true,
//     name: "aviral",
//     attributes: {
//         hairColor: 'black',
//         eyeColor: 'Blue',
//     },
// }

// Object.freeze(student1)
// Object.freeze(student1)

// student1.isStudent = false
// student1.attributes.hairColor = 'brown'
// student1.age =  30

// console.log(student1)
// let obj = new Object();
// obj.eys

// let date  = new Date()
// console.log(date.getDay())
//what are annagrams????


//s1 =  "godg"
//s2 = "gdog"

// function checkAnA(s1, s2) {
//     if(s1.length !== s2.length) return 
//     return s1.split('').sort() === s2.split('').sort()
// }

// checkAnA()

// console.log(document.all)
// console.log(document.all[15],document.all[16],document.all[17])
// document.title = "something new"

//getElemetById
// var heading = document.getElementById('main-header')
// console.log(heading)

// var list = document.getElementsByClassName('li-group')
// console.log(list)


// var divs = document.getElementsByTagName('div')
// console.log(divs)

//QuerySelector
// var heading = document.querySelectorAll('li-group')
// console.log(heading)
// Don't use childNodes
//FIRSTcHILD
//last child
// nextsibling
// var item = document.querySelector('#item')
// console.log(item.nextElementSibling)
// item.parentElement.style.border = "4px solid black"
{/* <h1>dahsgjha</h1>
<div><a></a></div> */}

//CREATE A DIV
// var newdiv = document.createElement('div');
// newdiv.className= "main"
// newdiv.id= "main-div"
// newdiv.setAttribute('title', 'this is a new div')

// var newanchor = document.createElement('a');
// newanchor.className= "anchor"
// newanchor.id= "main-anchor"
// newanchor.setAttribute('href', 'google')
// console.log(newanchor)

// // newdiv.appendChild(newanchor)


// let newText = document.createTextNode('Hello world')
// newdiv.appendChild(newText)

// console.log(newdiv)


// let submit = document.getElementById('btn1')
// console.log(submit)
// let input = document.getElementById('input')
// submit.addEventListener('dblclick', () => console.log('You clicked me'))

// input.addEventListener('keyup', () => console.log('keyUp'))

//Event bubbling

// var li = document.getElementById('item1');
// li.addEventListener('click', (e) =>  {
//     e.stopPropagation()
//     console.log('clicked the li element')
// })

// var ul = document.getElementById('item');
// ul.addEventListener('click',  () =>  {
//     console.log('clicked the ul element')
// })


/* console.log('1')
console.log('2')

setTimeout(() => console.log('123'), 1000)
function abc() {
console.log('3')
}

console.log('4')DIVIDED IN 2 PARTS.... CALL STACK,,,, QUEUEITERM
abc(); */


//javascript is a single threaded language

//suppose you made any api call



/// EVENT LOOP IN JAVASCRIPT

//  STACK = []

// queue = [console.log('123')]

//  CALLBACK FUNCTIONS
// function third(fourth) {
//     setTimeout(() => {
//         fourth()
//         console.log('this is 3');
//     }, 4000)
// }

// function four() {
//         console.log('this is 4')
// }

//  console.log('This is 1');
//  console.log('This is 2');
//  third(four)
//  console.log('This is 7')

//ES5 ====> PROMISES (TO HELP YOU RESOLVE CALLBACK HELL)
    // function third() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //                 // reject('i rejected')
    //                 resolve('this is third')
    //         }, 4000)
    //     }) 
    // }

//  console.log('This is 1');
//  console.log('This is 2');
// third().then(e => console.log(e)).catch(err => console.log(err))
    // .then(e => console.log(e))
    // .catch(err => console.log(err))

// var result = []
// fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(data => {
//         result.push(data.results)
//     })
//     .catch(err => console.log(err))
//     console.log(result)

// function logA() { console.log('A') }
// function logB() { console.log('B') }
// // function logC() { console.log('C') }
// function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
// logA();
// setTimeout(logB, 1000);

// Promise.resolve('asdadsd')
//     .then((text) => console.log(text))
    
// logD();


// for(let i = 1; i< 10; i++) {
//     setTimeout(() => console.log(i), 1000*i*2);
// }

// function third() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('this is 3'), 4000)
//     })
// }

// function four() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('this is 4'), 2000)
//     })
// }

// function five() {
//     return new Promise((res, rej) => {
//         setTimeout(() => rej('this is 5'), 1000)
//     })
// }

// console.log('this is 1')
// console.log('this is 2')

// third().then((x) => {
//     console.log(x);
//     four().then((x) => {
//         console.log(x)
//         five(x).then((x) => console.log(x))
//     })
// })

// Promise.allSettled([third(), four(), five()]).then((x) => {
// console.log(x)}).catch(x => console.log('someone got rejects'))

// check weather
//check flight


//es6 =====> async await

// function third() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('this is 3'), 4000)
//     })
// }

// function four() {
//     return new Promise((res, rej) => {
//         setTimeout(() => rej('this is 4'), 2000)
//     })
// }

// function six() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('this is 6'), 500)
//     })
// }

//  async function init() {
//     try {
//         let res = await fetch('https://randomuser.me/api/')
//         let data = await res.json()
//         console.log(data)
//     } catch(x){
//         console.log(x);
//     }
// }


// init();


//setInterval
//setTimeout
//Event loop
//Callback
//promises
//async await
// var x = setTimeout(() => console.log('abc'), 2000)
// var y = setTimeout(() => console.log('abc'), 1000)
// console.log(x)
// console.log(y)

// var x = setInterval(() => console.log('abc'), 2000)
// // console.log(x)

// setTimeout(() => clearInterval(x), 10000)
// 1,2,3,4,5,6,7,8,9


//debouncing and throttling
// ajsdakjs  ===> 0.5
// zxmncbznxzcbmncbcnzbcnmxzbmn ===> 0.5 sec

//debouncing

// input.onChange = debounceFn(apiCall, 1000) {// make api call}

//     var debounceFn = (apiCall, delay) => {
//         clearTimeout(timerId)
//        timerId =  setTimeout(apiCall, delay)
//     }




// function abc() {
//     var name = "aviral"
//     function def () {
//         function ghi() {
//             return(name)
//         }
//     }
// }

//currying 
    // add(5)(6) ==== 11

// function add(a) {
//     return function(b) {
//         return a+b
//     }
// }
// console.log(add(5)(6))


///this in javascript
// console.log(this)


// var student1 = {
//     name: 'aviral',
// }

// var student2 = {
//     name: 'manoj'
// }
// // var arr = [{},{},{}]
// function getName (age, hairColor) {
//     console.log(`his name is ${this.name} and age is ${age} and haircolor is ${hairColor}`)
// }

// getName.call(window,21, 'black') //output
// getName.call(student1,21, 'white') 
// getName.call(student2,21, 'brown')

// getName.apply(window, [21, 'black']) // output
// getName.apply(student1, [25, 'white'])
// getName.apply(student2, [30, 'brown'])

// var result = getName.bind(student1)
// ///call bind and apply ====> 

// result()


// let hero = {
//     _name: 'Manish',
//     getIdentitiy: () => {
//         return this._name
//     }
// }
// console.log(hero.getIdentitiy());
// var stoleIdentity = hero.getIdentitiy.bind(hero)
// console.log(stoleIdentity()) // ???

// console.log(hero.getIdentitiy()); /// ??

// function getIdentitiy() {
//    return('aviral')
// }
// console.log(getIdentitiy())

// const getIdentitiy1 = () => {
//     //code xyz
//     return 'aviral'
// }
// console.log(getIdentitiy1())



// innerFn('xyz')

// let obj1 = {
//     name: 'aviral'
// }

// const outerFn = function(item) {
//     const innerFn = function(_item) {
//         // console.log(this)
//         console.log(`value of this is ${this.name} and parameter is ${_item}`)
//     }
//     innerFn.call(this,item)
// }

// outerFn.call(obj1, 'param1')

// N/A ====> window
// object(f00) =====> FOO
//foo() ======> window
// foo.call(context) =====> context
// foo.apply(context) =====> context
// var newFoo = new Foo() =====>  newFoo



//obj.add(5).value ///5
//obj.substract(5).value //-5
//obj.add(5).substract(3).value //2
//obj.substract(5).add(5).substract(3).value // -3


// let obj = {
//     value: 0,
//     add: function(x) {
//         this.value = this.value + x
//         return this
//     },
//     substract: function(x) {
//         this.value = this.value - x
//         return this
//     }
// }
// let result = obj.substract(5).add(5).substract(3).value
// console.log(result)

// let abc = {
//     name: 'aviral',
//     age: 50
// }


// let newObj = new abc()
// console.log(newObj)

//regular function

// let add = function(n1, n2) {
//     return n1+n2
// }

// let add1 = new add(1,2)
// console.log(add1)

//constructor
// let Car = function(color, brand, convertable) {
//     //create public properties
//     this.color = color
//     this.brand = brand
//     this.getColor = function() {
//         console.log(this.color)
//     }
// }

// // let Person = function(name, hairColor) {
// //     this
// // }

// let car1 = new Car('red', 'tata', false)
// let car2 = new Car('blue', 'mahindra', true)


// console.dir(car1) 
// console.dir(car2) 

// console.log(car1 instanceof Car)

// console.log(car2)

// Array.isArray([])
// Object, Array, String, 


// prototype, prototypal inheritance



// let abc ={
//     a:5,
//     b: {
//         c:7,
//         d:{
//             e:7
//         }
//     }
// }


// let abc1 = {a: 5, b: undefined, }
// console.log(abc.a?.b?.d.e)

// let abc1 = { a: 5,c: 7, e:7 }
// for(let i in abc) {

// }
