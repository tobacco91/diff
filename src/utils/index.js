export function append(ele,_html) {
  const div = document.createElement('div');
  ele.innerHTML = '';
  div.innerHTML = _html;
  ele.appendChild(div);
}
export function toArray(data) {
	return [].slice.call(data)
}