const injectMap = new WeakMap();
const $inject = [];
class CellularFormDirective {
  constructor(injects) {
    CellularFormDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularFormDirective[item] = injects[index];
      injectMap.set(CellularFormDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-cellular-form.tpl.html'
    this.restrict = 'EA';
    this.controller = 'CellularFormController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      tabs: '=data',
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    CellularFormDirective.instance = new CellularFormDirective(injects);
    return CellularFormDirective.instance;
  }
}
CellularFormDirective.directiveFactory.$inject = $inject;
export default CellularFormDirective;
