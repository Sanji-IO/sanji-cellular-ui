import CellularFormContainerController from './container.controller';

const CellularFormContainerComponent = {
  template: `<sanji-cellular-form data="vm.data" on-submit="vm.onSave(data)"></sanji-cellular-form>`,
  controller: CellularFormContainerController,
  controllerAs: 'vm'
};
export default CellularFormContainerComponent;
