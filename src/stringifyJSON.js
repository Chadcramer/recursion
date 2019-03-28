// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// working 
var stringifyJSON = function(obj) {
    var arrOfKeyVals = [];
    var arrVals = [];
    var objKeys = [];

  if(obj === null){
    return '' + obj + '';
  }

  if(typeof obj === 'number' || typeof obj === 'boolean'){
    return  obj.toString() ;
  }

  if(typeof obj === 'string'){
    return '\"'+ obj + '\"';
  }

  if(Array.isArray(obj)){
    if(obj[0] === undefined){
      return '[]';
    } else {
      obj.forEach(function(el) {
      arrVals.push(stringifyJSON(el));
      });
      return '[' + arrVals + ']';
    }
  }

  if(typeof obj === 'object'){
    var arrOfKeyVals = [];
    var objKeys = Object.keys(obj);
    var objVals = Object.values(obj);
      console.log(objKeys, objVals);
    for(let i = 0; i < objKeys.length; i++){
      // check for nested obj, use recursion     
        
      if (typeof objVals[i] === 'string'){
          arrOfKeyVals.push(`"${objKeys[i]}":"${objVals[i]}"`);       
      } else if(typeof objVals[i] === 'number' || typeof objVals[i] === 'boolean'){
        arrOfKeyVals.push(`"${objKeys[i]}":${objVals[i]}`);
      } else if(typeof objVals[i] === 'object'){
        arrOfKeyVals.push('"'+ objKeys[i]+'":' + stringifyJSON(objVals[i]));
      }
    }
  return '{' + arrOfKeyVals + '}';  
  }
};

