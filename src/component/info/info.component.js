import CellularInfoController from './info.controller';

const CellularInfoComponent = {
  bindings: {
    tabs: '<data',
    tabIndex: '='
  },
  templateUrl: 'sanji-cellular-info.tpl.html',
  controller: CellularInfoController
};
export default CellularInfoComponent;
