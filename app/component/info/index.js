import angular from 'angular';

import './cellular-signal.tpl.html';
import './cellular-signal.style.scss';
import CellularSignalComponent from './cellular-signal.component';

import './info.tpl.html';
import CellularInfoContainerComponent from './container.component';
import CellularInfoComponent from './info.component';

const sjCellularInfo = angular.module('sanji.cellular.info', [])
  .component('sanjiCellularInfoContainer', CellularInfoContainerComponent)
  .component('sanjiCellularInfo', CellularInfoComponent)
  .component('cellularSignal', CellularSignalComponent)
  .name;
export {sjCellularInfo};
