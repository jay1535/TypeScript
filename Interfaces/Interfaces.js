//An interface declaration is another way to name an object type:
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
/*Differences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases
you can choose between them freely. Almost all features of an interface are available in type,
 the key distinction is that a type cannot be re-opened to
 add new properties vs an interface which is always extendable. */ 
