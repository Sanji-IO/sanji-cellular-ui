import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import './component.style.scss';
import i18nConfig from './component.i18n';
import CellularService from './component.service';
import CellularContainerController from './component-container.controller';
import CellularController from './component.controller';
import CellularContainerDirective from './component-container.directive';
import CellularDirective from './component.directive';
import CellularWindowDirective from './component-window.directive';

let app = angular.module('sanji.cellular', [sjCore]);
app.config(i18nConfig);
app.service('cellularService', CellularService);
app.controller('CellularContainerController', CellularContainerController);
app.controller('CellularController', CellularController);
app.directive('sanjiCellularContainer', CellularContainerDirective.directiveFactory);
app.directive('sanjiCellular', CellularDirective.directiveFactory);
app.directive('sanjiCellularWindow', CellularWindowDirective.directiveFactory);
export default app = app.name
