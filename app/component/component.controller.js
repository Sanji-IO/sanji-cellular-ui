const $inject = [];
class CellularController {
  constructor(...injects) {
    CellularController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({data: data});
  }
}
CellularController.$inject = $inject;
export default CellularController;
