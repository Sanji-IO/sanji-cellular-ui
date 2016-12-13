const $inject = [];
class CellularFormController {
  constructor(...injects) {
    CellularFormController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({
      $event: {
        data: data
      }
    });
  }
}
CellularFormController.$inject = $inject;
export default CellularFormController;
