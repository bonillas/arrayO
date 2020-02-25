import  {filterObject, sortObject, mapObject, reduceObject}  from './src/arrayO.js';

//Example usage
const obj = {
    b: "5",
    a: "20",
    c: "15"
}

console.log(filterObject(obj, n => n >= 10))

console.log(sortObject(obj, (a, b) => b-a))

console.log(mapObject(obj, n => n = n + 10))

console.log(reduceObject(obj, (accumulator, currentValue) => {
    return accumulator + currentValue
}, null, true))
