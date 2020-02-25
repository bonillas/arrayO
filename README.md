
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
    //outputs { a: '20', c: '15' }
      
    
    console.log(sortObject(obj, (a, b) => b-a))
    //outputs { a: '20', c: '15', b: '5' }
    
      
    
    console.log(mapObject(obj, n => n = n +  10))
    //outputs { b: '510', a: '2010', c: '1510' }
    
      
    
    console.log(reduceObject(obj, (accumulator, currentValue) => {
    
    return accumulator + currentValue
    
    }, null))
    //outputs 52015

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
    //outputs { a: '20', c: '15' }
    
    console.log(arrayO.sortObject(obj, (a, b) => b - a))
    //outputs { a: '20', c: '15', b: '5' }
  
    console.log(arrayO.mapObject(obj, n => n = n +  10, false))    
    //outputs { b: '510', a: '2010', c: '1510' }
    
    console.log(arrayO.reduceObject(obj, (accumulator, currentValue) => {
    return accumulator + currentValue
    }, null))
    //outputs 52015
    
    </script>

# How to use the functions.
## mapO(object, function, isKeys)
The function works just like MAP function method of an Array.

**PARAMETERS**

1) ***Object***: The first parameter is the object you want to apply the mapping to.
2) ***Function callback***: The second parameter is the callback you want to apply to each element of the object.
2) ***isKeys***: The third parameter indicates whether you want to apply the mapping to the Values of the Object, or the Keys of the Object. By default it is set to false which means it applies it to the values of the object.

Example:

    mapObject(obj, n => n = n +  10)
    //returns { b: '510', a: '2010', c: '1510' }

    //Or if we set third parameter, we do the mapping on the keys
    mapObject(obj, n => n = n +  10, true)
    //returns { b10: '5', a10: '20', c10: '15' }


## filterO(object, function, isKeys)
The function works just like FILTER function method of an Array.

**PARAMETERS**

1) ***Object***: The first parameter is the object you want to apply the filtering to.
2) ***Function callback***: The second parameter is the callback you want to apply to each element of the object.
2) ***isKeys***: The third parameter indicates whether you want to apply the filtering to the Values of the Object, or the Keys of the Object. By default it is set to false which means it applies it to the values of the object.

Example:

    filterObject(obj, n => n >=  10)
    //returns { a: '20', c: '15' }

    //Or if we set third parameter, we do the filtering on the keys
    filterObject(obj, n =>n=="c", true)
    //returns { c: '15' }

