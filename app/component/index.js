import angular from 'angular';
import { sjCellularInfo } from './info';
import { sjCellularForm } from './form';

import i18nConfig from './component.i18n';
import { CellularActions, cellularReducer } from './component.state';
import CellularService from './component.service';
import CellularWindowComponent from './window.component';

const sjCellular = angular.module('sanji.cellular', [
  sjCellularInfo,
  sjCellularForm
])
.config(i18nConfig)
.factory('cellularActions', CellularActions)
.service('cellularService', CellularService)
.component('sanjiCellularWindow', CellularWindowComponent)
.name;
export { sjCellular, cellularReducer };
