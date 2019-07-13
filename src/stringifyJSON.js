// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// working 
function stringifyJSON (obj) {
  let results;
  // if number or null
  if(typeof obj === 'number' || obj === null || typeof obj === 'boolean'){
    results = `${obj}`;
  }

  // String
  if(typeof obj === 'string'){
    results = `"${obj}"`
  }

  // Array
  if(Array.isArray(obj) === true){
    let temp = obj.map((val) => {
      return stringifyJSON(val);
    })
    results = `[${temp}]`;
  }

  // Object
  if(typeof obj === 'object' && obj !== null && Array.isArray(obj) === false){
    let newKey = '';
    let newVal = '';
    let temp = '';

    for(let key in obj){
      newKey = stringifyJSON(key);
      newVal = stringifyJSON(obj[key]);
      temp += newKey + ':' + newVal;
    }
    results = '{' + temp + '}';
  }

  return results;
};