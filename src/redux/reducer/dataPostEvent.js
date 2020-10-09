const statePostEvent = {
  dataPostEvent: [
    {
      title: "tes",
      detail: "Lorem",
      gambar:
        "https://www.blibli.com/friends/assets/2020/03/shutterstock_583541458.jpg",
    },
    {
      title: "tes123",
      detail: "Lorem",
      gambar:
        "https://www.blibli.com/friends/assets/2020/03/shutterstock_583541458.jpg",
    },
  ],
};

const postEventReducer = (state = statePostEvent, action) => {
  switch (action.type) {
    case "TAMBAH_DATA":
      return { dataPostEvent: [{ ...state }, action.value] };
    default:
      return state;
  }
};
export default postEventReducer;
