const injectMap = new WeakMap();
const $inject = [];
class CellularDirective {
  constructor(injects) {
    CellularDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularDirective[item] = injects[index];
      injectMap.set(CellularDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-cellular-edit.tpl.html'
    this.restrict = 'EA';
    this.controller = 'CellularController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      
      tabs: '=data',
      
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    CellularDirective.instance = new CellularDirective(injects);
    return CellularDirective.instance;
  }
}
CellularDirective.directiveFactory.$inject = $inject;
export default CellularDirective;
