const $inject = [];
class CellularInfoController {
  constructor(...injects) {
    CellularInfoController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  $onInit() {
    this.currentCarrier = {};
    this.onFetchCarrier({
      $event: {
        id: (this.tabIndex || 0) + 1
      }
    }).then(carrier => {
      this.currentCarrier = carrier.current;
    });
  }
}
CellularInfoController.$inject = $inject;
export default CellularInfoController;
