const injectMap = new WeakMap();
const $inject = [];
class CellularContainerDirective {
  constructor(injects) {
    CellularContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularContainerDirective[item] = injects[index];
      injectMap.set(CellularContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'CellularContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-cellular data="vm.data" on-submit="vm.onSave(data)"></sanji-cellular>`;
  }

  static directiveFactory(...injects) {
    CellularContainerDirective.instance = new CellularContainerDirective(injects);
    return CellularContainerDirective.instance;
  }
}
CellularContainerDirective.directiveFactory.$inject = $inject;
export default CellularContainerDirective;
