import { data } from "../util";

export const auth = {
  isAuthenticated() {
    if (data.currentUser) {
      return true;
    } else {
      return false;
    }
  },
  signOut() {
    data.currentUser = null;
  },
};
