type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

/*
The in operator narrowing
JavaScript has an operator for determining if an object or its prototype chain has a property
 with a name: the in operator.
  TypeScript takes this into account as a way to narrow down potential types.

For example, with the code: "value" in x. where "value" is a string literal and x is a union type.
 The “true” branch narrows x’s types which have either an optional or required property value,
  and the “false” branch narrows to types which have an optional or missing property value.

*/