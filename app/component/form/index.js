import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import CellularFormContainerController from './container.controller';
import CellularFormController from './form.controller';
import CellularFormContainerComponent from './container.component';
import CellularFormComponent from './form.component';

let app = angular.module('sanji.cellular.form', [sjCore]);
app.controller('CellularFormContainerController', CellularFormContainerController);
app.controller('CellularFormController', CellularFormController);
app.component('sanjiCellularFormContainer', CellularFormContainerComponent);
app.component('sanjiCellularForm', CellularFormComponent);
export default app = app.name;
