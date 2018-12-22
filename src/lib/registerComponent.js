import Lib from './index.js';
// window.componentPool = {};
// class RegisterComponent {
//   constructor(component) {
//     this.lib = new Lib(component);
//   }
//   setState(args) {
//     this.lib.setState(args);
//   }
// }
export default (name, component) => {
  const lib = new Lib(component);
  return lib;
  // const registerComponent = new RegisterComponent(component);
  // componentPool[name] = registerComponent;
  // return registerComponent;
}