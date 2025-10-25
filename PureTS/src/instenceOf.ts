/*
JavaScript has an operator for checking whether or not a value is an “instance” of another value.
 More specifically, in JavaScript x instanceof Foo checks whether the prototype chain of x
  contains Foo.prototype. While we won’t dive deep here, and you’ll see more of this when we get 
  into classes, they can still be useful for most values that can be constructed with new. 
  As you might have guessed, instanceof is also a type guard,
 and TypeScript narrows in branches guarded by instanceofs.
*/

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               

  } else {
    console.log(x.toUpperCase());
        
  }
}


/*
Using type predicates
We’ve worked with existing JavaScript constructs to handle narrowing so far,
 however sometimes you want more direct control over how types change throughout your code.

To define a user-defined type guard, we simply need to define a function whose return type
 is a type predicate:
*/
type Fish= { swim : () => void}
type Bird= { fly : () => void}


function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

/*
Discriminated unions
Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like string, boolean, and number. While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.

For some motivation, let’s imagine we’re trying to encode shapes like circles and squares. Circles keep track of their radiuses and squares keep track of their side lengths. We’ll use a field called kind to tell which shape we’re dealing with. Here’s a first attempt at defining Shape.
*/