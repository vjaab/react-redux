const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      state + 1;
      break;
    case DECREMENT:
      state + 1;
      break;
    case RESET:
      state = 0;
      break;
  }
};

export default reducer;
