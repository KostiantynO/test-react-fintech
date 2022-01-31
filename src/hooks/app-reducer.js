export const action = {
  setAmount: 'setAmountOnSubmit',
  setUsers: 'setUsersOnMount',
  updateUsers: 'updateUsersOnRequest',
};

export const appReducer = (state, { type, payload }) => {
  return {
    [action.setAmount]: () => ({ ...state, amount: payload }),
    [action.setUsers]: () => ({ ...state, users: [...payload] }),
    [action.updateUsers]: () => ({
      ...state,
      users: [...state.users, ...payload],
    }),
  }[type]();
};
