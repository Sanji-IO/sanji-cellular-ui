const injectMap = new WeakMap();
const $inject = [];
class CellularInfoDirective {
  constructor(injects) {
    CellularInfoDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularInfoDirective[item] = injects[index];
      injectMap.set(CellularInfoDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-cellular-info.tpl.html'
    this.restrict = 'EA';
    this.controller = 'CellularInfoController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      tabs: '=data',
    };
  }

  static directiveFactory(...injects) {
    CellularInfoDirective.instance = new CellularInfoDirective(injects);
    return CellularInfoDirective.instance;
  }
}
CellularInfoDirective.directiveFactory.$inject = $inject;
export default CellularInfoDirective;
