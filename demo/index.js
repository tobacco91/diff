import registerComponent from '../src/lib/registerComponent.js';
import './index.less';
import data from './data.json';

let parent = registerComponent('parent',{
  state: {
    data:[],
    choice: {
      0:{index:0,disabled:false, dropDownClass: 'drop-down'},
      1:{index:0,disabled:false, dropDownClass: 'drop-down'},
      2:{index:0,disabled:false, dropDownClass: 'drop-down'},
    },

  },

  componentDidMount: function() {
    this.setState({
      data: data
    })
  },
  choice: function(e) {
    const index1 = e.currentTarget.getAttribute('index1');
    const index2 = e.currentTarget.getAttribute('index2');
    parent.state.choice[index1].index =index2;
    parent.state.choice[index1].disabled =false;
    parent.state.choice[index1].dropDownClass = 'drop-down' ;
    parent.setState({
      choice: parent.state.choice
    })
  },
  showDropDown: function(e) {
    const index = e.currentTarget.getAttribute('index1');
    const dropDownClass = parent.state.choice[index].disabled ? 'drop-down' : 'drop-down show';
    parent.state.choice[index].disabled = !parent.state.choice[index].disabled;
    parent.state.choice[index].dropDownClass = dropDownClass;
    parent.setState({
      choice: parent.state.choice
    })
  },
  // change: function() {

  //   parent.setState({
  //     data: 1110
  //   })
  // // },
  // <p data-class="price-center">${item.type[this.state.choice[index1]].other.price}</p>
  // <p data-class="price-bottom">${item.type[this.state.choice[index1]].other.discount}</p>
  // <span><span data-class="drop-down-item-bold">CPU</span>${item.type[this.state.choice[index1]].cpu}</span>
  // <span><span data-class="drop-down-item-bold">内存</span>${item.type[this.state.choice[index1]].memory}</span>
  setHTML: function() {
    var _html = this.state.data.map((item,index1) => {
      return(
      `<div data-class="card">
          <div data-class="header">
            <h1 data-class="title">
              ${item.title}
            </h1>
            <p data-class="description1">
              ${item.description1}
            </p>
            <p data-class="description2">
              ${item.description2}
            </p>
          </div>
          <div data-class="container">
            <div data-class="choice">
              <div data-class="selected">
              <span data-class="drop-down-item-span"><span data-class="drop-down-item-bold">CPU</span><span>${item.type[this.state.choice[index1].index].cpu}</span></span>
              <span data-class="drop-down-item-span"><span data-class="drop-down-item-bold">内存</span><span>${item.type[this.state.choice[index1].index].memory}</span></span>
              <span data-class="selected-icon" data-index1=${index1} data-onclick="showDropDown">▾</span>
              </div>
              <div data-class="${this.state.choice[index1].dropDownClass}">
                ${item.type.map((choiceItem,index2) => {
                    return (`<div data-class="drop-down-item" data-index1=${index1}  data-index2=${index2} data-onclick="choice">
                      <span data-class="drop-down-item-span"><span data-class="drop-down-item-bold">CPU</span><span>${choiceItem.cpu}</span></span>
                      <span data-class="drop-down-item-span"><span data-class="drop-down-item-bold">内存</span><span>${choiceItem.memory}</span></span>
                    </div>`)
                }).join('')}
              </div>
            </div>
            <div data-class="model">
              <div data-class="model-item">
                <p data-class="model-item-top">
                  ${item.bandwidth}
                </p>
                <p>
                  带宽
                </p>
              </div>
              <div data-class="model-item">
                <p data-class="model-item-top">
                  ${item.cloudDisk}
                </p>
                <p>
                高效云盘
                </p>
              </div>
            </div>
            <div data-class="price">
              <p data-class="price-top">新购1年：75折，折后价如下</p>
              <p data-class="price-center">￥${item.type[this.state.choice[index1].index].other.price} /年</p>
              <p data-class="price-bottom"><span>省 </span>￥${item.type[this.state.choice[index1].index].other.discount} /年</p>
            </div>
          </div>
          <div data-class="button">
          立即购买
          </div>
        </div>`
      )
    }).join('');
    return(
      `<div data-class="card-all">
        ${_html}
      </div>`
    )

  },
  parent: document.querySelector('#root')
})





