const $inject = [];
class CellularInfoController {
  constructor(...injects) {
    CellularInfoController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({data: data});
  }
}
CellularInfoController.$inject = $inject;
export default CellularInfoController;
