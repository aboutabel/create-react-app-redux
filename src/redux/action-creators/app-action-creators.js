import { SET_DATA } from "./actions";

export function setData(data) {
  return {
    type: SET_DATA,
    data
  }
}