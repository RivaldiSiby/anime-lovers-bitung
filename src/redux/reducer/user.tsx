import { ADD_USER, REMOVE_USER } from "../action/user";

const initialState: any = {
  data: false,
};

export const user = (prevstate: {} = initialState, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return {
        data: action.payload.data,
      };
    case REMOVE_USER:
      return {
        data: action.payload.data,
      };

    default:
      return prevstate;
  }
};
