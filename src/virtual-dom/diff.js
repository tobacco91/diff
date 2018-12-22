function isChange(prevElement,nextElement) {
  return (typeof prevElement !== typeof nextElement)
  || ((typeof prevElement === 'string' || typeof prevElement === 'number') && (prevElement !== nextElement))
  || (prevElement.type !== nextElement.type);
}
function diff(prevElement, nextElement) {
  if(!prevElement) {
    return {
      type: 'CREATE',
      node: nextElement
    }
  } else if(!nextElement) {
    return {
      type: 'REMOVE'
    }
  } else if(isChange(prevElement,nextElement)) {
    return {
      type: 'REPLACE',
      node: nextElement
    }
  } else if(prevElement.type) {
    return {
      type: 'UPDATE',
      propsPatches: propsDiff(prevElement.props,nextElement.props),
      childrenPatches: childrenDiff(prevElement.children,nextElement.children)
    }
  }
}

function propsDiff(prevProps,nextProps) {
  const props = Object.assign({},prevProps,nextProps);
  const arr = [];
  Object.keys(props).forEach(prop => {
    if(!prevProps[prop] || (prevProps[prop] !== nextProps[prop])) {
      arr.push({
        type: 'SET',
        attr: prop,
        value: props[prop]
      })
    } else if(!nextProps[prop]) {
      arr.push({
        type: 'REMOVE',
        attr: prop
      })
    }
  })
  return arr;
}

function childrenDiff(arr1,arr2) {
  const length = Math.max(arr1.length,arr2.length);
  const resArr = [];
  for(let i = 0; i < length; i ++) {
    resArr.push(diff(arr1[i],arr2[i]));
  }
  return resArr;
}

export default diff;