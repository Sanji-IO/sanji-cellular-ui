const $inject = [];
class CellularInfoController {
  constructor(...injects) {
    CellularInfoController.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}
CellularInfoController.$inject = $inject;
export default CellularInfoController;
