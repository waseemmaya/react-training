import ACTIONS from "./action";

const initialState = {
  user: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AuthActions.ON_LOGIN: {
      let user = action.payload;
      let cloneState = { ...state };
      cloneState.user = user;
      return cloneState;
    }

    case ACTIONS.AuthActions.ON_LOGOUT: {
      let cloneState = { ...state };
      cloneState.user = false;
      return cloneState;
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
