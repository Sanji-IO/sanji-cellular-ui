const injectMap = new WeakMap();
const $inject = [];
class CellularInfoContainerDirective {
  constructor(injects) {
    CellularInfoContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularInfoContainerDirective[item] = injects[index];
      injectMap.set(CellularInfoContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'CellularInfoContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-cellular-info data="vm.data"></sanji-cellular-info>`;
  }

  static directiveFactory(...injects) {
    CellularInfoContainerDirective.instance = new CellularInfoContainerDirective(injects);
    return CellularInfoContainerDirective.instance;
  }
}
CellularInfoContainerDirective.directiveFactory.$inject = $inject;
export default CellularInfoContainerDirective;
