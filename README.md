
![enter image description here](https://raw.githubusercontent.com/bonillas/arrayO/master/logo/ArrayO.png)

# ArrayO.js - What is it?

 Library for using the HighOrder Javascript Array functions  like Filter, Map, Sort  and Reduce but in Objects.

# Getting started

## For ES6 Version
Just clone this project and use the file in this project located at `src/arrayO.js`

Then you can use it Importing the functions and using them like this:

     import {filterObject, sortObject, mapObject, reduceObject} from  './src/arrayO.js';
    
      
    
    //Example usage
    
    const obj = {
    b: "5",
    a: "20",
    c: "15"
    }
    
      
    
    console.log(filterObject(obj, n => n >=  10))
    
      
    
    console.log(sortObject(obj, (a, b) => b-a))
    
      
    
    console.log(mapObject(obj, n => n = n +  10))
    
      
    
    console.log(reduceObject(obj, (accumulator, currentValue) => {
    
    return accumulator + currentValue
    
    }, null, true))

## Directly on browser

Use the file in this project located at `src/array0-web.min.js` .

Then in your HTML file do something like this:

    <script  src="src/array0-web.min.js"></script>
    <script>
    //Example usage
    
    var obj = {
    a: "5",
    b: "10",
    c: "15"
    };
    
    console.log(arrayO.filterObject(obj, n => n >=  10))
    
    console.log(arrayO.sortObject(obj, (a, b) => b - a))
  
    console.log(arrayO.mapObject(obj, n => n = n +  10, false))    
    
    console.log(arrayO.reduceObject(obj, (accumulator, currentValue) => {
    return accumulator + currentValue
    }, null, true))
    
    </script>

# How to use the functions.
## mapO
The function
