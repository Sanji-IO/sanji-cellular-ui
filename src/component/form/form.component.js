import CellularFormController from './form.controller';

const CellularFormComponent = {
  bindings: {
    tabs: '<data',
    carrier: '<',
    tabIndex: '=',
    submitCallback: '&onSubmit',
    onFetchCarrier: '&',
    onSetCarrier: '&'
  },
  templateUrl: 'sanji-cellular-form.tpl.html',
  controller: CellularFormController
};
export default CellularFormComponent;
