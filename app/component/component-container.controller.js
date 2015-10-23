const $inject = ['sanjiWindowService', 'cellularService'];
class CellularContainerController {
  constructor(...injects) {
    CellularContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    const WINDOW_ID = 'sanji-cellular-ui';
    const EDIT_STATE = 'sanji-edit';
    let cellularService = this.cellularService;
    let sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);

    this.data = cellularService.data;

    this.cellularService.get().then(() => {
      this.data = cellularService.data;
      sanjiWindowMgr.navigateTo(EDIT_STATE);
    });
  }

  onSave(data) {
    this.cellularService.update(data);
  }
}
CellularContainerController.$inject = $inject;
export default CellularContainerController;
