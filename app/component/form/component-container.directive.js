const injectMap = new WeakMap();
const $inject = [];
class CellularFormContainerDirective {
  constructor(injects) {
    CellularFormContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularFormContainerDirective[item] = injects[index];
      injectMap.set(CellularFormContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'CellularFormContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-cellular-form data="vm.data" on-submit="vm.onSave(data)"></sanji-cellular-form>`;
  }

  static directiveFactory(...injects) {
    CellularFormContainerDirective.instance = new CellularFormContainerDirective(injects);
    return CellularFormContainerDirective.instance;
  }
}
CellularFormContainerDirective.directiveFactory.$inject = $inject;
export default CellularFormContainerDirective;
