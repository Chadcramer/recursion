// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// working 
var stringifyJSON = function(element) {
  let result = "";
  // number
  if(typeof element === 'number'){
    result += element;
    return `${result}`;
  }

  // null
  if(element === null){
    return `null`;
  }

  // boolean
  if(element === true){
    return `true`;
  }
  if(element === false){
    return `false`;
  }

  // String
  if(typeof element === 'string'){
    return `"${element}"`
  }

  // array
  if(Array.isArray(element) === true){
    let newArr = element;
    if(typeof element === 'string'){
      
    }
    return `[${newArr}]`;
  }

};

