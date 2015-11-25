const injectMap = new WeakMap();
const $inject = [];
class CellularWindowDirective {
  constructor(injects) {
    CellularWindowDirective.directiveFactory.$inject.forEach((item, index) => {
      CellularWindowDirective[item] = injects[index];
      injectMap.set(CellularWindowDirective[item], injects[index]);
    });
    this.restrict = 'E';
    this.template = `<sanji-window window-id="sanji-cellular-ui"
                      window-name="{{'CELLULAR' | translate}}" show-loading-btn>
                      <sanji-window-state default-state
                        state-name="sanji-info"
                        link-name="{{'CELLULAR_FORM_SETTING' | translate}}"
                        icon="settings">
                        <sanji-cellular-container></sanji-cellular-container>
                      </sanji-window-state>
                    </sanji-window>`;
  }

  static directiveFactory(...injects) {
    CellularWindowDirective.instance = new CellularWindowDirective(injects);
    return CellularWindowDirective.instance;
  }
}
CellularWindowDirective.directiveFactory.$inject = $inject;
export default CellularWindowDirective;
