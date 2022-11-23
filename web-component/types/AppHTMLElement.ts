import {App} from '../src/App';

export type ConstructorType<T> = new (...args:any[]) => T;
export abstract class AppHTMLElement<T = any> extends HTMLElement {
    protected attributeMap = new Map<string, string>();
    protected data: T;
    abstract render(): void

    constructor() {
        super();
    }

    connectedCallback() {
        this.addEvent()
        this.render();
    }

    setData(data: T) {
        this.data = data;
        this.dataChangedCallback(this.data);
    }

    dataChangedCallback(data: T) {
        this.render();
    }

    attributeChangedCallback(attrName:string, oldVal: string, newVal: string) {
        this.attributeMap.set(attrName, newVal);
        this.render();
    }

    private addEvent() {
        this.dispatchEvent(new CustomEvent('on-load-app', {detail: {data: this}}));
    }

    protected clear() {
        this.innerHTML = '';
    }
}