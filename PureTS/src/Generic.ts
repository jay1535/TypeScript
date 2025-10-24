const scores : Array<number> = []
const names : Array<string> = []


function identityOne (val: number | boolean): boolean | number{
    return val
}

function identityTwo ( val: any) : any{
 return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}
identityFour(9)
identityThree(9)


function getSearchProducts<T,>(products: T[]): T | undefined {
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T,>(products : T[]) : T | undefined => {
  const myIndex = 4;
  return products[myIndex]
}

//Use of Parameter types in Generics

interface Database{
    connection : string,
    password : string,
    network : string
}

function anotherFunction <T,U extends Database>(valOne:T, valTwo : U): object{
return{
    valOne,
    valTwo
}
}

// anotherFunction(3, 4)


//Use of class Type in Generics


interface Quiz{
    name : string,
    question : string,
    ans : string
}

class Sellable<T>{
    public cart : T[] = [];
    addToCart(product : T){
        this.cart.push(product)
    }
}