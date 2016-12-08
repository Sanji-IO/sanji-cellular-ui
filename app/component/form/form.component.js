import CellularFormController from './form.controller';

const CellularFormComponent = {
  bindings: {
    tabs: '<data',
    submitCallback: '&onSubmit'
  },
  templateUrl: 'sanji-cellular-form.tpl.html',
  controller: CellularFormController
};
export default CellularFormComponent;
