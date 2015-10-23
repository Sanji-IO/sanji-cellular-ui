import sjCore from 'sanji-core-ui';

import './component-edit.tpl.html';
import './component.scss';
import i18nConfig from './component.i18n';
import CellularService from './component.service';
import CellularContainerController from './component-container.controller';
import CellularController from './component.controller';
import CellularContainerDirective from './component-container.directive';
import CellularDirective from './component.directive';

let app = angular.module('sanji.cellular', [sjCore]);
app.config(i18nConfig);
app.service('cellularService', CellularService);
app.controller('CellularContainerController', CellularContainerController);
app.controller('CellularController', CellularController);
app.directive('sanjiCellularContainer', CellularContainerDirective.directiveFactory);
app.directive('sanjiCellular', CellularDirective.directiveFactory);
export default app = app.name
