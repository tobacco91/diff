const { setProps,setEvent } = require('./dom')

function createNode(element) {
  let node
  if (typeof element === 'number' || typeof element === 'string') {
    node = document.createTextNode(element)
  } else {
    node = document.createElement(element.type)
    setProps(node, element.props)
    if (typeof element.children === 'number' || typeof element.children === 'string') {
      node.appendChild(createNode(element.children))
    } else if (element.children) {
      element.children.forEach(item => {
        node.appendChild(createNode(item))
      });
    }
  }
  return node
}
export default createNode;
