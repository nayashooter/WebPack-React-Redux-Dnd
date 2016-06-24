'use strict';

const initialState = {
  currentView:  'root',
  enterTime:    null,
  leaveTime:    null,
  listItem: []
};

const views = (state = initialState, action) => {
  switch (action.type) {

  case 'ENTER_HOME_VIEW':
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;

  case 'LEAVE_HOME_VIEW':
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;


  case 'ENTER_ABOUT_VIEW':
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;

  case 'LEAVE_ABOUT_VIEW':
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;

  case 'INIT_DATA':
    return Object.assign({}, state, {
      listItem: action.listItem
    });

  case 'MOVE_CATEGORIE':
    return Object.assign({}, state, {
      categorie: action.categorie,
      jour: action.jour
    });


  default:
    return state;
  }
};


export default views;
