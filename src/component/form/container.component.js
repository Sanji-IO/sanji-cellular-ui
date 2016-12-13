import CellularFormContainerController from './container.controller';

const CellularFormContainerComponent = {
  template: `<sanji-cellular-form data="$ctrl.data" on-submit="$ctrl.onSave($event)"></sanji-cellular-form>`,
  controller: CellularFormContainerController
};
export default CellularFormContainerComponent;
