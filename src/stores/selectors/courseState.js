import { selector } from "recoil";
import courseState from "../atoms/course";

const isLoadingState = selector({
  key: 'courseTitleState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);

    return state.title;
  },
});

export default isLoadingState;