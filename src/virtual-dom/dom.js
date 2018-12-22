export const EVENT_TYPE = [
'onafterprint',
'onbeforeprint',
'onbeforeunload',
'onerror',
'onhaschange',
'onload',
'onmessage',
'onoffline',
'ononline',
'onpagehide',
'onpageshow',
'onpopstate',
'onredo',
'onresize',
'onstorage',
'onundo',
'onunload',
'onblur',
'onchange',
'oncontextmenu',
'onfocus',
'onformchange',
'onforminput',
'oninvalid',
'onreset',
'onselect',
'onsubmit',
'onkeydown',
'onkeypress',
'onkeyup',
'onclick',
'ondblclick',
'ondrag',
'ondragend',
'ondragenter',
'ondragleave',
'ondragover',
'ondragstart',
'ondrop',
'onmousedown',
'onmousemove',
'onmouseout',
'onmouseover',
'onmouseup',
'onmousewheel',
'onscroll',
'onabort',
'oncanplay',
'oncanplaythrough',
'ondurationchange',
'onemptied',
'onended',
'onerror',
'onloadeddata',
'onloadedmetadata',
'onloadstart',
'onpause',
'onplay',
'onplaying',
'onprogress',
'onratechange',
'onreadystatechange',
'onseeked',
'onseeking',
'onstalled',
'onsuspend',
'ontimeupdate',
'onvolumechange',
'onwaiting',
'abort',
'blur'
]


export function setProps(ele, props) {
  Object.keys(props).forEach(e => {
    if(EVENT_TYPE.indexOf(e) !== -1) {
      setEvent(ele, e, props[e]);
    } else {
      setProp(ele, e, props[e]);
    }

  })
}

export function setProp(ele,attr,value) {
  ele.setAttribute(attr,value);
}

export function setEvent(ele, event, value) {
  ele.addEventListener(event.slice(2), value);
}

export function removeProp(ele,attr) {
  ele.removeAttribute(attr);
}


