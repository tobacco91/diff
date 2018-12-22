import { toArray } from '../utils/index.js';
import {EVENT_TYPE} from './dom.js';

function virtualTree(_html,component) {
  // console.log(component)
  const div = document.createElement('div');
  div.innerHTML = _html;
  const element = div.childNodes[0];
  const _component = Object.assign({},component);
  const res = elementMapping(element, _component);
  return res;
}


function elementMapping(element,component) {
  if(element.nodeType === 3) {
    return element.data
  }else if(element.nodeType === 1) {
    const obj = {};
    const dataset = Object.assign({},element.dataset);
    Object.keys(dataset).forEach(e => {
      if(EVENT_TYPE.indexOf(e) !==  -1) {
        dataset[e] = component[dataset[e]];
      }
    })
    obj.type = element.tagName.toLowerCase();
    obj.props = dataset;
    obj.children = childrenMapping(element.childNodes,component);
    return obj;
  }
}

function childrenMapping(dom,component) {
  const resArr = [];
  toArray(dom).forEach(element => {
    if(!/^[\s]+$/.test(element.data)) {
      resArr.push(elementMapping(element,component));
    }
  })
  return resArr;
}

export default virtualTree;