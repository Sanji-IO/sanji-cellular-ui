import angular from 'angular';
import sjCore from 'sanji-core-ui';
import sjCellularInfo from './info';
import sjCellularForm from './form';

import i18nConfig from './component.i18n';
import CellularService from './component.service';
import CellularWindowComponent from './window.component';

let app = angular.module('sanji.cellular', [
  sjCore,
  sjCellularInfo,
  sjCellularForm
]);
app.config(i18nConfig);
app.service('cellularService', CellularService);
app.component('sanjiCellularWindow', CellularWindowComponent);
export default app = app.name;
