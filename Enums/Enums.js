/*
Enums are a feature added to JavaScript by TypeScript which allows for describing
 a value which could be one of a set of possible named constants.
 Unlike most TypeScript features, this is not a type-level addition to JavaScript
 but something added to the language and runtime. Because of this,
 it’s a feature which you should know exists,
 but maybe hold off on using unless you are sure.


 Enums are one of the few features TypeScript has which is not a type-level
 extension of JavaScript.

Enums allow a developer to define a set of named constants.
 Using enums can make it easier to document intent, or create a set of distinct cases.
 TypeScript provides both numeric and string-based enums.
*/
/*
Numeric enums
We’ll first start off with numeric enums, which are probably more familiar
if you’re coming from other languages. An enum can be defined using the enum keyword.
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
/*Above, we have a numeric enum where Up is initialized with 1.
All of the following members are auto-incremented from that point on. In other words, Direction.
Up has the value 1, Down has 2, Left has 3, and Right has 4. */
//If we wanted, we could leave off the initializers entirely:
(function (Direction) {
    Direction[Direction["Up1"] = 0] = "Up1";
    Direction[Direction["Down1"] = 1] = "Down1";
    Direction[Direction["Left1"] = 2] = "Left1";
    Direction[Direction["Right1"] = 3] = "Right1";
})(Direction || (Direction = {}));
//String enums are a similar concept, but have some subtle runtime differences as documented below. 
// In a string enum, each member has to be constant-initialized with a string literal, 
// or with another string enum member.
(function (Direction) {
    Direction["Up2"] = "UP";
    Direction["Down2"] = "DOWN";
    Direction["Left2"] = "LEFT";
    Direction["Right2"] = "RIGHT";
})(Direction || (Direction = {}));
//While string enums don’t have auto-incrementing behavior, 
// string enums have the benefit that they “serialize” well. In other words, 
// if you were debugging and had to read the runtime value of a numeric enum,
//  the value is often opaque - it doesn’t convey any useful meaning on its own 
// (though reverse mapping can often help). String enums allow you to give a meaningful and
//  readable value when your code runs, 
// independent of the name of the enum member itself.
