import CellularInfoController from './info.controller';

const CellularInfoComponent = {
  bindings: {
    tabs: '<data',
    carrier: '<',
    onFetchCarrier: '&',
    tabIndex: '='
  },
  templateUrl: 'sanji-cellular-info.tpl.html',
  controller: CellularInfoController
};
export default CellularInfoComponent;
