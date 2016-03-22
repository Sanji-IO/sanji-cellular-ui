// reference from http://codepen.io/shorepound/details/GpXVwW/
const injectMap = new WeakMap();
const $inject = [];
class CellularSignalDirective {
  constructor(injects) {
    CellularSignalDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularSignalDirective[item] = injects[index];
      injectMap.set(CellularSignalDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-cellular-signal.tpl.html'
    this.restrict = 'EA';
    this.controller = 'CellularSignalController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      signal: '@',
    };
  }

  static directiveFactory(...injects) {
    CellularSignalDirective.instance = new CellularSignalDirective(injects);
    return CellularSignalDirective.instance;
  }
}
CellularSignalDirective.directiveFactory.$inject = $inject;
export default CellularSignalDirective;
