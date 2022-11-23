import {AppHTMLElement} from '../types/AppHTMLElement';

export class NavigationSelector extends AppHTMLElement {

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['total', 'limit'];
    }

    onChange(data: number) {
        this.dispatchEvent(new CustomEvent('on-skip', {detail: {data}}));
    }

    render() {
        const total = Number(this.attributeMap.get('total'));
        const limit = Number(this.attributeMap.get('limit'));
        console.log('navigation->', total, limit)
        if (!total || !limit) {
            this.innerHTML = 'no';
            return;
        }
        this.clear();
        const ol = document.createElement('ol');
        const first = document.createElement('li');
        first.innerText = '<<';
        ol.appendChild(first);
        const length = Math.ceil(total / limit)
        const arr = Array.from({length}, (v, i) => i);
        arr.forEach(it => {
            const item = document.createElement('li');
            const value = it + 1;
            item.innerText = String(value);
            item.addEventListener('click', (e) => {
                this.onChange(value);
            })
            ol.appendChild(item)
        })
        const last = document.createElement('li');
        last.innerText = '>>';
        ol.appendChild(last)
        this.appendChild(ol);
    }

}