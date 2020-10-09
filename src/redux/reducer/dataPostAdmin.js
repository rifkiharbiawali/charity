const statePostEvent = {
  tambahData: true,
};

const postAdminReducer = (state = statePostEvent, action) => {
  switch (action.type) {
    case "TAMBAH_DATA1":
      return { tambahData: true };
    default:
      return state;
  }
};
export default postAdminReducer;
