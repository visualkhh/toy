import {App} from './App';
import {LengthSelector} from './LengthSelector';
import {NavigationSelector} from './NavigationSelector';
import {ContentTable} from './ContentTable';

new App()
    .setComponent({name: 'length-selector', type: LengthSelector})
    .setComponent({name: 'navigation-selector', type: NavigationSelector})
    .setComponent({name: 'content-table', type: ContentTable})
    .run();

console.log('app start')
