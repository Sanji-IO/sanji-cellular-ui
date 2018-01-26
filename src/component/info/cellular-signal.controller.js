// reference from http://codepen.io/shorepound/details/GpXVwW/
const $inject = [];
class CellularSignalController {
  constructor(...injects) {
    CellularSignalController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }
}
CellularSignalController.$inject = $inject;
export default CellularSignalController;
