// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// working 
var stringifyJSON = function(element) {
  let result = element;

  // Number
  if(typeof element === 'number'){
    result = element;
  }
  
  // String
  if(typeof element === 'string'){
    result = `"${element}"`;
  }

  // Array
  if(Array.isArray(element) === true){
    result = [];
    // Empty
    if(element.length === 0){
      result = `${element}`;
    }
    for(let i = 0; i < element.length; i++){
      // Number
      if(typeof element[i] === 'number'){
        result = `${element}`
      }
      // String
      if(typeof element[i] === 'string'){
        result = `"${element}"`;
      }
      // Array
      if(Array.isArray(element[i]) === true){
        stringifyJSON(element[i]);
      }
    }
    return `[${result}]`
  }

  return `${result}`;

};

