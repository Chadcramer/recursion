// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//input - string
//output - array

// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  const result = []
  
  function parse(node) {
    if (node.classList && node.classList.value.indexOf(className) > -1) {
      result.push(node)
    }
    node.childNodes.forEach((child) => 
      parse(child)
    )
  }
  parse(document.body)
  
  return result
};
