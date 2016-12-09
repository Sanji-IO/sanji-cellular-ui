//-------------------------------------------------------------------
// Constants
//-------------------------------------------------------------------
export const GET_CELLULARS = 'GET_CELLULARS';
export const UPDATE_CELLULAR = 'UPDATE_CELLULAR';

//-------------------------------------------------------------------
// Actions
//-------------------------------------------------------------------

export const CellularActions = ($q, cellularService) => {
  'ngInject';

  const getCellulars = options => {
    return (dispatch, getState) => {
      const { cellulars } = getState();

      if((options && !options.force) && cellulars.length) {
        return $q.when(cellulars)
          .then(() => dispatch({ type: GET_CELLULARS, payload: cellulars }));
      } else {
        return cellularService.get()
          .then(data => dispatch({ type: GET_CELLULARS, payload: data }));
      }
    };
  };

  const updateCellular = cellular => {
    return (dispatch) => {
      return cellularService.update(cellular)
        .then(() => dispatch({ type: UPDATE_CELLULAR, payload: cellular }));
    };
  };

  return {
    getCellulars,
    updateCellular
  };
};

//-------------------------------------------------------------------
// Reducers
//-------------------------------------------------------------------
export const cellulars = (state = [], {type, payload}) => {
  switch (type) {
    case GET_CELLULARS:
      return payload || state;
    case UPDATE_CELLULAR:
      return state.map(data => cellular(data, {type, payload}));
    default:
      return state;
  }
};

export const cellular = (state, {type, payload}) => {
  switch (type) {
    case UPDATE_CELLULAR:
      if (state.content.id !== payload.content.id) {
        return state;
      }
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
