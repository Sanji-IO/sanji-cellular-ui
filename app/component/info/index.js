import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './cellular-signal.tpl.html';
import './cellular-signal.style.scss';
import CellularSignalComponent from './cellular-signal.component';

import './info.tpl.html';
import CellularInfoContainerComponent from './container.component';
import CellularInfoComponent from './info.component';

let app = angular.module('sanji.cellular.info', [sjCore]);
app.component('sanjiCellularInfoContainer', CellularInfoContainerComponent);
app.component('sanjiCellularInfo', CellularInfoComponent);
app.component('cellularSignal', CellularSignalComponent);
export default app = app.name;
