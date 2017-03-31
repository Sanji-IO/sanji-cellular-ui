import angular from 'angular';

import './form.style.scss';
import './form.tpl.html';
import CellularFormContainerComponent from './container.component';
import CellularFormComponent from './form.component';

const sjCellularForm = angular
  .module('sanji.cellular.form', [])
  .component('sanjiCellularFormContainer', CellularFormContainerComponent)
  .component('sanjiCellularForm', CellularFormComponent).name;
export { sjCellularForm };
