import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import './form.tpl.html';
import CellularFormContainerComponent from './container.component';
import CellularFormComponent from './form.component';

const sjCellularForm = angular.module('sanji.cellular.form', [sjCore])
  .component('sanjiCellularFormContainer', CellularFormContainerComponent)
  .component('sanjiCellularForm', CellularFormComponent)
  .name;
export {sjCellularForm};
