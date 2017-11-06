/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. Not bound; simple function call. global object in non-strict mode;
* undefined in strict mode.
* 2. Implicit: called as a method on an object. this refers to the object the
* function is called on.
* 3. Explicit: Called with call or apply; this is bound to the first argument of
* the call or apply functions.
* 4. Using new on a contructor function. this is the object returned after
* calling new.
* write out a code example of each explanation above
*/

// First Rule

// hello();

// Second Rule

// obj1.method();

// Third Rule

// method1.call(obj1)
// method1.apply(obj1)

// Fourth Rule * you may want to use your third rule's example to accomplish this
//
// function MyObject() {
//
// }
//
// let obj1 = new MyObject();

// explain closure:
// A closure is a function that remembers it's lexical environment at the time of its creation.

function foo () {
  console.log(this); // what does this point to? It depends on how the function is invoked.
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  // the count variable is the closure as it's remembered in future function
  // invocations on the counter variable.
  let count = 0;

  const changeCount = (value) => {
    count += value;
  };
  return {
    increment: () => {
      changeCount(1);
    },
    decrement: () => {
      changeCount(-1);
    },
    total: () => {
      return count;
    }
  }
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());


// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.

function Car({make, model, year}) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.speak = function() {
  return `${this.year} ${this.model}`;
};

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 

class NewCar {
  constructor({make, model, year}) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  speak() {
    return `${this.year} ${this.model}`;
  }
}

const toyota = new NewCar({make: 'Toyota', model: 'Camry', year: '2000'});
console.log(toyota.speak());
const ford = new NewCar({make: 'Ford', model: 'Taurus', year: '1995'});
console.log(ford.speak());

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.

function countDown(n) {
  if (n <= 1) {
    console.log(n);
    return
  }

  console.log(n);
  return countDown(n - 1);
}

countDown(10);
