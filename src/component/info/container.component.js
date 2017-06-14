import CellularInfoContainerController from './container.controller';

const CellularInfoContainerComponent = {
  template: `<sanji-cellular-info data="$ctrl.data" tab-index="$ctrl.sanjiWindowMgr.tabIndex"></sanji-cellular-info>`,
  controller: CellularInfoContainerController
};
export default CellularInfoContainerComponent;
