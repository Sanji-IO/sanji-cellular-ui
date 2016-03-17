import sjCore from 'sanji-core-ui';

import './cellular-signal.tpl.html';
import './cellular-signal.style.scss';
import CellularSignalController from './cellular-signal.controller';
import CellularSignalDirective from './cellular-signal.directive';

import './component.tpl.html';
import CellularInfoContainerController from './component-container.controller';
import CellularInfoController from './component.controller';
import CellularInfoContainerDirective from './component-container.directive';
import CellularInfoDirective from './component.directive';

let app = angular.module('sanji.cellular.info', [sjCore]);
app.controller('CellularInfoContainerController', CellularInfoContainerController);
app.controller('CellularInfoController', CellularInfoController);
app.controller('CellularSignalController', CellularSignalController);
app.directive('sanjiCellularInfoContainer', CellularInfoContainerDirective.directiveFactory);
app.directive('sanjiCellularInfo', CellularInfoDirective.directiveFactory);
app.directive('cellularSignal', CellularSignalDirective.directiveFactory);
export default app = app.name
