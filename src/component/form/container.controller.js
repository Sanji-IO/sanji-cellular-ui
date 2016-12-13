const $inject = ['$scope', '$ngRedux', 'sanjiWindowService', 'cellularActions'];
const WINDOW_ID = 'sanji-cellular-ui';
class CellularFormContainerController {
  constructor(...injects) {
    CellularFormContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  $onInit() {
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.unhandler = this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.cellularActions)(this);
    this.getCellulars();
  }

  $onDestroy() {
    this.unhandler();
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      data: state.cellulars
    };
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.getCellulars({force: true});
    }
  }

  onSave(event) {
    this.sanjiWindowMgr.promise = this.updateCellular(event.data);
  }
}
CellularFormContainerController.$inject = $inject;
export default CellularFormContainerController;
