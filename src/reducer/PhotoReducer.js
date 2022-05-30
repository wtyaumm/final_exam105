import { Data } from "../share/PhotoData.js";
const photoState = Data;

export default (state = photoState, action) => {
  let photoList;
  switch (action.type) {
    case "LIKE":
      photoList = [...state];
      photoList.find((p) => p.id == action.payload.photoId).like += 1;
      return photoList;
    case "DISLIKE":
      photoList = [...state];
      photoList.find((p) => p.id == action.payload.photoId).like -= 1;
      return photoList;
    case "COMMENT":
      let { photoId, username, comment, rate } = action.payload;
      photoList = [...state];
      photoList
        .find((p) => p.id == photoId)
        .comments.push({ username, comment, rate });
      return photoList;
    default:
      return state;
  }
};
