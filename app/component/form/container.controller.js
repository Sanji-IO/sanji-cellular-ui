const $inject = ['$scope', 'sanjiWindowService', 'cellularService'];
const WINDOW_ID = 'sanji-cellular-ui';
class CellularFormContainerController {
  constructor(...injects) {
    CellularFormContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.cellularService.data;
    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.cellularService.get().then(() => {
        this.data = this.cellularService.data;
      });
    }
  }

  onSave(data) {
    this.sanjiWindowMgr.promise = this.cellularService.update(data);
  }
}
CellularFormContainerController.$inject = $inject;
export default CellularFormContainerController;
