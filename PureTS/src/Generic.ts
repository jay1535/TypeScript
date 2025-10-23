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