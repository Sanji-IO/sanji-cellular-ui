const $inject = ['$timeout'];
class CellularFormController {
  constructor(...injects) {
    CellularFormController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  $onInit() {
    this.currentCarrier = {};
    this.onFetchCarrier({
      $event: {
        id: this.tabIndex + 1
      }
    }).then(carrier => {
      this.currentCarrier = carrier.preferred;
    });
  }

  save(data) {
    this.submitCallback({
      $event: {
        data: data
      }
    });
  }

  setCarrier(carrier) {
    this.onSetCarrier({
      $event: {
        id: this.tabIndex + 1,
        carrier
      }
    });
  }
}
CellularFormController.$inject = $inject;
export default CellularFormController;
