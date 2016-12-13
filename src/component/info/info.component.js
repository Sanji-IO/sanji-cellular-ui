import CellularInfoController from './info.controller';

const CellularInfoComponent = {
  bindings: {
    tabs: '<data'
  },
  templateUrl: 'sanji-cellular-info.tpl.html',
  controller: CellularInfoController,
  controllerAs: 'vm'
};
export default CellularInfoComponent;
