import createNode from './createNode.js';
import {setProps,setProp,removeProp } from './dom.js';
export default function patch(parent, diff, i = 0) {
  const node = parent.childNodes[i];
  if(diff.type === 'CREATE') {
    parent.appendChild(createNode(diff.node))
  } else if(diff.type === 'REMOVE') {
    parent.removeChild(node)
  } else if(diff.type === 'REPLACE') {
    parent.replaceChild(createNode(diff.node),node)
  } else if(diff.type === 'UPDATE') {
    patchProps(diff.propsPatches,node)
    diff.childrenPatches.forEach((item,index) => {
      patch(node,item,index);
    })
  }
}

function patchProps(propsPatches,node) {
  propsPatches.forEach(item => {
    const {type, attr , value} = item;
    if(type === 'SET') {
      setProp(node, attr, value);
    } else if(item.type === 'REMOVE') {
      removeProp(node,attr)
    }
  })
}
