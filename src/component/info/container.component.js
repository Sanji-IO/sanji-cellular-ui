import CellularInfoContainerController from './container.controller';

const CellularInfoContainerComponent = {
  template: `<sanji-cellular-info data="$ctrl.data"
              carrier="$ctrl.carrier"
              on-fetch-carrier="$ctrl.onFetchCarrier($event)"
              tab-index="$ctrl.sanjiWindowMgr.tabIndex"></sanji-cellular-info>`,
  controller: CellularInfoContainerController
};
export default CellularInfoContainerComponent;
