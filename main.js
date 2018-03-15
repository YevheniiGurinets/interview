// 1. Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?

function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })




// 2. Необходимо, чтобы этот код выводил в лог числа 0, 1, 2, 3 в указанном порядке, 
// но он этого не делает (Однажды вы столкнётесь с этой ошибкой. Некоторые люди любят
// задавать этот вопрос на собеседованиях).

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}




// 3. Необходимо, чтобы этот код выводил в лог doggo, но он выводит лишь undefined.

let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()




// 4. Попытка вызова метода bark() объекта Dog вызывает ошибку. Почему?

function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()




// 5. Почему функция isBig() возвращает именно такой результат?

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true



// 6. 

console.log('' == '0'); //false 
console.log(0 == ''); // true 
console.log(0 =='0'); // true
console.log(true + false) // 1
console.log(true + 1) // 2

// 7.

let a = b || c;


// 8. 

// What is a potential pitfall with using typeof bar === "object" to determine 
// if bar is an object? How can this pitfall be avoided?


// 9. What will the code below output to the console and why?

(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));



  // 10. What will the code below output to the console and why?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();


// 11. What is the significance of, and reason for, wrapping the entire 
// content of a JavaScript source file in a function block?



// 12. Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}




// 13. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?



// 14. What will the code below output? Explain your answer.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);




// 15. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.



// 16. In what order will the numbers 1-4 be logged to the 
// console when the code below is executed? Why?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();


// 17. Write a simple function (less than 160 characters) 
// that returns a boolean indicating whether or not a string is a palindrome.




// 18. Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


// 19. Consider the following code snippet:

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
  }
// (a) What gets logged to the console when the user clicks on “Button 4” and why?
  
// (b) Provide one or more alternate implementations that will work as expected.




// 20. Assuming d is an “empty” object in scope, say:

var d = {};

// …what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});






// 21. What will the code below output to the console and why?

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));




// 22. What will the code below output to the console and why ?

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);





// 23. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};





// 24. What is a “closure” in JavaScript? Provide an example.





// 25. What will be the output of the following code:

for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
// Explain your answer. How could the use of closures help here?





// 26. What would the following lines of code output to the console?

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

// Explain your answer.





// 27. What will be the output when the following code is executed? Explain.

console.log(false == '0')
console.log(false === '0')





// 28. What is the output out of the following code? Explain your answer.

var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);





// 29. What will the following code output to the console:

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

// Explain your answer.





// 30. Consider the code snippet below. What will the console output be and why?

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);





// 31. What will the following code output to the console and why:

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// What is the issue with this code and how can it be fixed.





// 32.  Create a function that, given a DOM Element on the page, will visit the element itself and
// all of its descendents (not just its immediate children).
// For each element visited, the function should pass that element to a provided callback function.

/// The arguments to the function should be:

//   a DOM element
//   a callback function (that takes a DOM element as its argument)







// 33. Testing your this knowledge in JavaScript: What is the output of the following code?

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);






// 34. Consider the following code. What will the output be, and why?

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();








// 35. What will be the output of this code?

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();







// 36. How do you clone an object?





// 37. What will this code print?
for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
  }
  



// 38. What do the following lines output, and why?

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);




// 39. How do you add an element at the begining of an array? How do you add one at the end?






// 40. Imagine you have this code:

var a = [1, 2, 3];
// a) Will this result in a crash?

a[10] = 99;
// b) What will this output?

console.log(a[6]);





//41. What is the value of typeof undefined == typeof NULL?





// 42. What would following code return?

console.log(typeof typeof 1);





// 43. What will the following code output and why?

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();






// 44. В чем разница между последними двумя строчками:

function Person(){}

var person = Person()
var person = new Person()



// 45. Какое значение возвращает данное предложение? 

"i'm a lasagna hog".split("").reverse().join("");




// 46. Чему равно window.foo?

( window.foo || ( window.foo = "bar" ) );





// 47. Что покажут эти два alert?

var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);





// 48. Чему равно foo.length?

var foo = {};
foo.bar = 'hello';





// 49. Что выведется в консоль?

var a = {
    v: 1,
  };
  
  var b = {
    v: 2,
  };
  
  function logValue() {
    console.log(this.v);
  }
  
  logValue.bind(a).bind(b)();






// 50. Напишите функцию, принимающую массив
// произвольных слов и на выходе дающую двумерный массив анаграмм:

['стол', 'барокко', 'слот', 'кот', 'кошка', 'ток', 'коробка']
// ->
[
  ['стол', 'слот'],
  ['кот', 'ток'],
  ['барокко', 'коробка']
]



// 51. Напишите функцию для сложения чисел, поддерживающую неограниченное количество вызовов:

sum(2)(3)(); // -> 5
sum(1)(2)(3)(4)(); // -> 10




// 52. Напишите функцию, которая принимает массив с 
// неограниченной вложенностью и делает из него плоский массив:

[1, [2, [3, 4], 5], 6, [7]] // -> [1, 2, 3, 4, 5, 6, 7]


