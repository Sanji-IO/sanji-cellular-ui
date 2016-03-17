import sjCore from 'sanji-core-ui';
import sjCellularInfo from './info';
import sjCellularForm from './form';

import i18nConfig from './component.i18n';
import CellularService from './component.service';
import CellularWindowDirective from './component-window.directive';

let app = angular.module('sanji.cellular', [
  sjCore,
  sjCellularInfo,
  sjCellularForm
]);
app.config(i18nConfig);
app.service('cellularService', CellularService);
app.directive('sanjiCellularWindow', CellularWindowDirective.directiveFactory);
export default app = app.name
