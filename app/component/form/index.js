import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import CellularFormContainerController from './component-container.controller';
import CellularFormController from './component.controller';
import CellularFormContainerDirective from './component-container.directive';
import CellularFormDirective from './component.directive';

let app = angular.module('sanji.cellular.form', [sjCore]);
app.controller('CellularFormContainerController', CellularFormContainerController);
app.controller('CellularFormController', CellularFormController);
app.directive('sanjiCellularFormContainer', CellularFormContainerDirective.directiveFactory);
app.directive('sanjiCellularForm', CellularFormDirective.directiveFactory);
export default app = app.name
