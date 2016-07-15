import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import CellularFormContainerComponent from './container.component';
import CellularFormComponent from './form.component';

let app = angular.module('sanji.cellular.form', [sjCore]);
app.component('sanjiCellularFormContainer', CellularFormContainerComponent);
app.component('sanjiCellularForm', CellularFormComponent);
export default app = app.name;
