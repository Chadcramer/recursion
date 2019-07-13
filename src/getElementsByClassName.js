// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

//input - string
//output - array
const getElementsByClassName = (className, node) => {
  let results = [];  
  let body = document.body;

  let helper = (element) => {
      // check if element has targetClassName
      if(element.classList.contains(className)){
          // if yes, add to results array
        results.push(element);
      }
      // check if child
      if(element.children.length !== 0){
        // if yes, call function on child
        for(let i = 0; i < element.children.length; i++){
            helper(element.children[i]);
        }
      } 
  }

    helper(body);
  return results;
};
