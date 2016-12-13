// reference from http://codepen.io/shorepound/details/GpXVwW/
import CellularSignalController from './cellular-signal.controller';

const CellularSignalComponent = {
  bindings: {
    signal: '<'
  },
  templateUrl: 'sanji-cellular-signal.tpl.html',
  controller: CellularSignalController,
  controllerAs: 'vm'
};
export default CellularSignalComponent;
