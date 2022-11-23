import {AppHTMLElement} from '../types/AppHTMLElement';

export class LengthSelector extends AppHTMLElement {
    constructor() {
        super();
    }

    onChange(e: Event) {
        const data = (e.target as any).value;
        this.dispatchEvent(new CustomEvent('on-limit', {detail: {data}}));
    }

    static get observedAttributes() {
        return ['lengths'];
    }

    render() {
        const lengths: string[] = this.attributeMap.get('lengths')?.split(',').map(it => it.trim());
        this.clear();
        const select = document.createElement('select')
        lengths.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.innerText = value;
            select.appendChild(option);
        });
        select.addEventListener('change', (e) => {this.onChange(e)})
        this.appendChild(select);
    }
}