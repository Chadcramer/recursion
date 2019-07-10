// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

//input - string
//output - array
const getElementsByClassName = (className, node) => {
    debugger;
    var nodes = [];
    node = node || document.body;
  
    // compare the node's classname with className
    var parts = node.className.split(' ');
    if( parts.indexOf(className) >= 0 ){
      // if equal, save it
      nodes.push(node);
    }
  
    // iterate over all children
    for( var i = 0; i < node.children.length; i++ ){
      // for each child, recurse with new node
      var childResults = getElementsByClassName(className, node.children[i]);
      nodes = nodes.concat(childResults);
    }
  
    return nodes;
};
