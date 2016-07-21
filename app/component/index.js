import angular from 'angular';
import {sjCore} from 'sanji-core-ui';
import {sjCellularInfo} from './info';
import {sjCellularForm} from './form';

import i18nConfig from './component.i18n';
import CellularService from './component.service';
import CellularWindowComponent from './window.component';

const sjCellular = angular.module('sanji.cellular', [
  sjCore,
  sjCellularInfo,
  sjCellularForm
])
.config(i18nConfig)
.service('cellularService', CellularService)
.component('sanjiCellularWindow', CellularWindowComponent)
.name;
export {sjCellular};
