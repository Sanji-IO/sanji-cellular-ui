import CellularFormContainerController from './container.controller';

const CellularFormContainerComponent = {
  template: `<sanji-cellular-form data="$ctrl.data"
              tab-index="$ctrl.sanjiWindowMgr.tabIndex"
              carrier="$ctrl.carrier"
              on-fetch-carrier="$ctrl.onFetchCarrier($event)"
              on-set-carrier="$ctrl.onSetCarrier($event)"
              on-submit="$ctrl.onSave($event)"></sanji-cellular-form>`,
  controller: CellularFormContainerController
};
export default CellularFormContainerComponent;
