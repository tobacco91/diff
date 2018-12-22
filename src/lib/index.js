import { append,toArray } from '../utils/index.js';
import virtualTree from '../virtual-dom/createVirtualTree.js';
import  mountElement from '../virtual-dom/createNode.js';
import diff from '../virtual-dom/diff.js';
import patch from '../virtual-dom/patch.js';
class Lib {
  constructor(component) {
    this.component = component;
    for(var key in component) {
      this[key] = component[key]
    }
    this.setState = this.setState;
    this.prevTree = {};
    this.nextTree = {};
    this.render();
  }
  render() {
    typeof this.componentWillMount === 'function' && this.componentWillMount();
    this.prevTree = virtualTree(this.setHTML().replace(/[\r\n]+/g,""),this.component);
    // this.parent.innerHTML = '';
    this.parent.appendChild(mountElement(this.prevTree));
    typeof this.componentDidMount === 'function' && this.componentDidMount();

  }

  reset() {
    this.nextTree = virtualTree(this.setHTML().replace(/[\r\n]+/g,""),this.component);
    const res = diff(this.prevTree,this.nextTree)
    console.log(res)
    patch(this.parent,res);
    // this.parent.innerHTML = '';
    // this.parent.appendChild(mountElement(this.nextTree));
  }

  setState(args) {
    this.state = Object.assign(this.state, args);
    this.reset();
  }

}
export default Lib;