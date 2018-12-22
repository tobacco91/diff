import registerComponent from './lib/registerComponent.js';
import {append} from './utils/index.js';

let parent = registerComponent('parent',{
  state: {
    data: 'data',
    // time: '2018.01.12'
  },
  // componentDidMount: function() {
  //   this.setState({
  //     data: '100'
  //   })
  // },
  componentDidMount: function() {

    // parent.setState({
    //   data: 'will'
    // })
  },
  change: function() {

    parent.setState({
      data: 1110
    })
  },
  setHTML: function() {
    return (
      `<div click="change" data-a=${this.state.data}>
        <div data-class="lalla" data-c=${this.state.data}>${this.state.data}</div>
        <div data-class="222" data-onclick="change">${this.state.data}</div>
      </div>`
    );
  },
  parent: document.querySelector('#root')
})





