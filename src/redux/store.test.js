import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("Should handle creating and updating courses", function () {
  // arrange
  const store = createStore(rootReducer, initialState);

  const course0 = {
    id: 0,
    title: "Clean Code"
  };

  const course1 = {
    id: 1,
    title: "Rest"
  };

  const course1b = {
    id: 1,
    title: "Test"
  };

  const finalCourses = [course0, course1b];
  //console.log(finalCourses);

  // act
  const createCourse0Action = courseActions.createCourseSuccess(course0);
  store.dispatch(createCourse0Action);

  const createCourse1Action = courseActions.createCourseSuccess(course1);
  store.dispatch(createCourse1Action);

  const updateCourse1Action = courseActions.updateCourseSuccess(course1b);
  store.dispatch(updateCourse1Action);

  // assert
  const createdCourses = store.getState().courses;
  //console.log(createdCourses);
  expect(createdCourses).toEqual(finalCourses);
});
