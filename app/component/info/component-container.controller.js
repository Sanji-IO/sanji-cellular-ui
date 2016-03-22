const $inject = ['$scope', 'sanjiWindowService', 'cellularService'];
const WINDOW_ID = 'sanji-cellular-ui';
class CellularInfoContainerController {
  constructor(...injects) {
    CellularInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.cellularService.data;

    this.activate();

    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this))
  }

  activate() {
    this.sanjiWindowMgr.promise = this.cellularService.get().then(() => {
      this.data = this.cellularService.data;
    });
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.activate();
    }
  }
}
CellularInfoContainerController.$inject = $inject;
export default CellularInfoContainerController;
