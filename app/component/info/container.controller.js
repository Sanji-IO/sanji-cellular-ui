const $inject = ['$scope', 'sanjiWindowService', 'cellularService'];
const WINDOW_ID = 'sanji-cellular-ui';
class CellularInfoContainerController {
  constructor(...injects) {
    CellularInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  $onInit() {
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.sanjiWindowMgr.promise = this.cellularService.get().then(data => this.data = data);
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.$onInit();
    }
  }
}
CellularInfoContainerController.$inject = $inject;
export default CellularInfoContainerController;
