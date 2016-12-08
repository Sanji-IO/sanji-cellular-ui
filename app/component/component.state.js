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
      const { cellularReducer } = getState();
      const cellulars = cellularReducer;

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
export const cellularReducer = (state = [], {type, payload}) => {
  switch (type) {
    case GET_CELLULARS:
      return payload || state;
    case UPDATE_CELLULAR:
      return state.map(cellular => cellular.content.id === payload.content.id ? payload : cellular);
    default:
      return state;
  }
};
