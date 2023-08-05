import { selector } from "recoil";
import courseState from "../atoms/course";

export const isCourseLoading = selector({
  key: 'isCourseLoading', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);

    return state.isLoading;
  },
});

export const courseDetails = selector({
  key: 'courseDetailsState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);

    return state.course;
  },
});


export const courseTitleState = selector({
  key: 'courseTitleState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);
    if(state.course){
        return state.course.title;
    }
    return "";
  },
});

export const courseDescState = selector({
  key: 'courseDescState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);
    if(state.course){
        return state.course.description;
    }
    return "";
  },
});

export const coursePriceState = selector({
  key: 'coursePriceState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);
    if(state.course){
        return state.course.price;
    }
    return "";
  },
});

export const courseImgLinkState = selector({
  key: 'courseImgLinkState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const state = get(courseState);
    if(state.course){
        return state.course.imageLink;
    }
    return "";
  },
});
