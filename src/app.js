import 'angular-material.css';
import 'angular-material-icons.css';
import 'angular-sanji-window.css';
import 'toastr.css';
import './app.scss';

import { carrier, cellulars, sjCellular } from './component';

import angular from 'angular';
import { sjCore } from 'sanji-core-ui';

const app = angular.module('webapp', [sjCore, sjCellular]);
class AppController {
  constructor($translate, LANG_KEYS, auth) {
    this.$translate = $translate;
    this.currentLang = $translate.use();
    this.langs = LANG_KEYS;
    this.auth = auth;
  }

  changeLang(lang) {
    this.$translate.use(lang);
  }

  isAuthorized(event) {
    return this.auth.isAuthorized(event.roles);
  }
}
app.config(reduxHelperProvider => {
  reduxHelperProvider.configure(
    { cellulars, carrier },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
});
app.run(session => {
  session.create('token', 'test');
  session.setUserData({
    role: 'admin'
  });
});
app.controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
