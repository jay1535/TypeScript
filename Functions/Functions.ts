//Function

/*Functions are the primary means of passing data around in JavaScript.
 TypeScript allows you to specify the types of both the input and output values of functions.*/

/*
Parameter Type Annotations:

When you declare a function, you can add type annotations after each parameter to 
declare what types of parameters the function accepts. Parameter type annotations go after 
the parameter name:*/

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

/*
Return Type Annotations
You can also add return type annotations. 
Return type annotations appear after the parameter list:
*/ 
function getFavoriteNumber(): number {
  return 26;
}

/*
Functions Which Return Promises
If you want to annotate the return type of a function which returns a promise, 
you should use the Promise type:
*/

async function getFavoriteNumber1(): Promise<number> {
  return 26;
}

/*
Anonymous Functions
Anonymous functions are a little bit different from function declarations. 
When a function appears in a place where TypeScript can determine how it’s going to be called, 
the parameters of that function are automatically given types.
*/

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

//We can also give the default value to a parameter in a function
function applyDiscount(price: number, discount: number = 0.05): number {
  return price - price * discount;
}

export {};