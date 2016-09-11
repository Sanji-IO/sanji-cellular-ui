const CellularWindowComponent = {
  bindings: {
    onAuthorized: '&'
  },
  template: `<sanji-window window-id="sanji-cellular-ui"
              window-name="{{'CELLULAR' | translate}}" show-loading-btn>
              <sanji-window-state default-state
                state-name="sanji-info"
                link-name="{{'CELLULAR_WINDOW_INFO' | translate}}"
                icon="info">
                <sanji-cellular-info-container></sanji-cellular-info-container>
              </sanji-window-state>
              <sanji-window-state ng-if="::$ctrl.isAuthorized('admin')"
                state-name="sanji-form"
                link-name="{{'CELLULAR_FORM_SETTING' | translate}}"
                icon="settings">
                <sanji-cellular-form-container></sanji-cellular-form-container>
              </sanji-window-state>
            </sanji-window>`,
  controller: class CellularWindowController {
    constructor() {}

    isAuthorized(roles) {
      return this.onAuthorized({
        $event: {
          roles: roles
        }
      });
    }
  }
};
export default CellularWindowComponent;
