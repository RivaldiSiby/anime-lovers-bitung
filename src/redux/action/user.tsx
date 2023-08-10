export const ADD_USER = "ADD_USER";

export const addUser = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_USER,
      payload: { data: data },
    });
  };
};
export const REMOVE_USER = "REMOVE_USER";
export const removeUser = () => {
  return (dispatch: any) => {
    dispatch({
      type: REMOVE_USER,
      payload: { data: false },
    });
  };
};
