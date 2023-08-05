import { selector } from "recoil";
import userState from "../atoms/user";

const isLoadingState = selector({
  key: 'isLoadingState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(userState);

    return state.isLoading;
  },
});

export default isLoadingState;