// 1. What will the following code output to the console and why:

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());



// 2. Testing your this knowledge in JavaScript: What is the output of the following code?

var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn();
        fn.call(this)
        arguments[0]();
    }
};

obj.method(fn, 1);



// 3. What will be the output of this code?

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();



// 4. What do the following lines output, and why?

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);




// 5. 

console.log('' == '0'); //false 
console.log(0 == ''); // true 
console.log(0 == '0'); // true
console.log(true + false) // 1
console.log(true + 1) // 2





// 6. Imagine you have this code:

var a = [1, 2, 3];
// a) Will this result in a crash?

a[10] = 99;
// b) What will this output?

console.log(a[6]);




// 7. What would following code return?

console.log(typeof typeof 1);





// 8. Что будет

console.log(10 + '10' - 10)
console.log('10' + 10 - 10)
console.log(10 - '10' + 10)





// 9. Что выведется в консоль?

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



// 10. Необходимо, чтобы этот код выводил в лог числа 0, 1, 2, 3 в указанном порядке, 
// но он этого не делает (Однажды вы столкнётесь с этой ошибкой. Некоторые люди любят
// задавать этот вопрос на собеседованиях).

for (var i = 0; i < 4; i++) {
    setTimeout( () => console.log(i), 0 )
}






// 11. What will the code below output to the console and why?

var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function () {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();






// 12. Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}






// 13. In what order will the numbers 1-4 be logged to the 
// console when the code below is executed? Why?

(function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})();





// 14. Consider the following code snippet:

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function () { console.log(i); });
    document.body.appendChild(btn);
}
// What gets logged to the console when the user clicks on “Button 4” and why?



// 15. What will the code below output to the console and why?

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
// console.log(arr2);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));




// 16. What will the code below output to the console and why ?

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);





// 17. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function () {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};





// 18. What is the output out of the following code? Explain your answer.

var a = {},
    b = { key: 'b' },
    c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// console.log({}.toString())



// 19. What will the following code output to the console:

console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(10));
// Explain your answer.



// 20. Consider the code snippet below. What will the console output be and why?

(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1);



// 21. What would the following lines of code output to the console?

console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));