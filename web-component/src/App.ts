import {AppHTMLElement, ConstructorType} from '../types/AppHTMLElement';

export type Product = {
    id: number;
    price: number;
    title: string;
}
export type Products = {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}

export class App {
    private components = new Map<string, ConstructorType<HTMLElement>>()
    private limit?: string;
    private skip?: number;
    private total?: number;
    private dataConsumer: AppHTMLElement;

    get navigationSelector() {
        return document.querySelector('#navigation-selector');
    }
    get lengthSelector() {
        return document.querySelector('#length-selector');
    }
    get contentTable() {
        return document.querySelector('#content-table');
    }

    setComponent(data: { name: string, type: ConstructorType<HTMLElement> }) {
        this.components.set(data.name, data.type);
        return this;
    }

    fetchData({limit = '10', skip = 0}: { limit?: string, skip?: number } = {limit: this.limit, skip: this.skip}) {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`)
            .then(res => res.json())
            .then((it: Products) => {
                this.total = it.total;
                this.navigationSelector.setAttribute('total', String(this.total));
                this.dataConsumer?.setData(it.products);
            })
        return
    }

    private addEvent() {

        this.lengthSelector
            .addEventListener('on-limit', (e: CustomEvent<{ data: string }>) => {
                this.limit = e.detail.data;
                this.navigationSelector.setAttribute('limit', this.limit);
                this.fetchData();
            });

        this.navigationSelector
            .addEventListener('on-skip', (e: CustomEvent<{ data: number }>) => {
                this.skip = e.detail.data;
                this.fetchData()
        })
    }

    run() {
        this.addEvent();
        this.fetchData();

        this.contentTable.addEventListener('on-load-app', (e: CustomEvent<{data: AppHTMLElement}>) => {
            this.dataConsumer = e.detail.data;
        })
        this.components?.forEach((it, key) => {
            window.customElements.define(key, it);
        });
    }

}
