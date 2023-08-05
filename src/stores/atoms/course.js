import {atom} from 'recoil';


const courseState = atom({
  key: 'courseState', // unique ID (with respect to other atoms/selectors)
  default: {
    isLoading: true,
    course: null
  }, // default value (aka initial value)
});

export default courseState;