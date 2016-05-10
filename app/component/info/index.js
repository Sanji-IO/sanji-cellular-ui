import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './cellular-signal.tpl.html';
import './cellular-signal.style.scss';
import CellularSignalController from './cellular-signal.controller';
import CellularSignalComponent from './cellular-signal.component';

import './info.tpl.html';
import CellularInfoContainerController from './container.controller';
import CellularInfoController from './info.controller';
import CellularInfoContainerComponent from './container.component';
import CellularInfoComponent from './info.component';

let app = angular.module('sanji.cellular.info', [sjCore]);
app.controller('CellularInfoContainerController', CellularInfoContainerController);
app.controller('CellularInfoController', CellularInfoController);
app.controller('CellularSignalController', CellularSignalController);
app.component('sanjiCellularInfoContainer', CellularInfoContainerComponent);
app.component('sanjiCellularInfo', CellularInfoComponent);
app.component('cellularSignal', CellularSignalComponent);
export default app = app.name;
