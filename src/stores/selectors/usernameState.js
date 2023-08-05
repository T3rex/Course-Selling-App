import { selector } from "recoil";
import userState from "../atoms/user";

const usernameState = selector({
  key: 'usernameState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(userState);

    return state.username;
  },
});

export default usernameState;