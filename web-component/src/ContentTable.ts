import {Product} from './App';
import {AppHTMLElement} from '../types/AppHTMLElement';

export class ContentTable extends AppHTMLElement<Product[]> {

    constructor() {
        super();
    }

    render() {
        this.clear();
        const table = document.createElement('table');
        this.data?.forEach(it => {
            const tr = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdPrice = document.createElement('td');
            const tdTitle = document.createElement('td');
            tdId.innerText = String(it.id);
            tdPrice.innerText = String(it.price);
            tdTitle.innerText = String(it.title);
            tr.appendChild(tdId);
            tr.appendChild(tdPrice);
            tr.appendChild(tdTitle);
            table.appendChild(tr);
        });
        this.appendChild(table);
    }
}