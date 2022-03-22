import { LOCATION_CHANGE } from 'connected-react-router'

import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from '@stores'
import {
  LOAD_COURSES,
  CREATE_COURSE,
  LOAD_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'
import { CourseState } from '@type/Store/course'
import { Action } from '@type/Store'

export const initialState: CourseState = {
  isLoading: false,
  error: null,
  courses: [],
  course: {},
  pagination: {},
  filter: {},
  isSubmitting: false
}

function loadCourses(state: CourseState) {
  return updateObject(state, {
    isLoading: true
  })
}

function coursesLoaded(state: CourseState, { payload }: Action) {
  const { courses, pagination, filter } = payload
  return updateObject(state, {
    isLoading: false,
    courses,
    pagination,
    filter
  })
}

function coursesLoadingError(state: CourseState, { error }: Action) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function loadCourse(state: CourseState) {
  return updateObject(state, {
    isLoading: true
  })
}

function courseLoaded(state: CourseState, { payload }: Action) {
  const { course } = payload
  return updateObject(state, {
    isLoading: false,
    course
  })
}

function courseLoadingError(state: CourseState, { error }: Action) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function createCourse(state: CourseState) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function createCourseSuccess(state: CourseState) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function createCourseError(state: CourseState, { error }: Action) {
  return updateObject(state, { error })
}

function editCourse(state: CourseState) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function editCourseSuccess(state: CourseState) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function editCourseError(state: CourseState, { error }: Action) {
  return updateObject(state, { error })
}

function deleteCourses(state: CourseState) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function deleteCoursesSuccess(state: CourseState) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function deleteCoursesError(state: CourseState, { error }: Action) {
  return updateObject(state, { error })
}

function resetState(state: CourseState) {
  return updateObject(state, { ...initialState })
}

// Slice reducer
export default createReducer(initialState, {
  [REQUEST(LOAD_COURSES)]: loadCourses,
  [SUCCESS(LOAD_COURSES)]: coursesLoaded,
  [FAILURE(LOAD_COURSES)]: coursesLoadingError,

  [REQUEST(LOAD_COURSE)]: loadCourse,
  [SUCCESS(LOAD_COURSE)]: courseLoaded,
  [FAILURE(LOAD_COURSE)]: courseLoadingError,

  [REQUEST(CREATE_COURSE)]: createCourse,
  [SUCCESS(CREATE_COURSE)]: createCourseSuccess,
  [FAILURE(CREATE_COURSE)]: createCourseError,

  [REQUEST(EDIT_COURSE)]: editCourse,
  [SUCCESS(EDIT_COURSE)]: editCourseSuccess,
  [FAILURE(EDIT_COURSE)]: editCourseError,

  [REQUEST(DELETE_COURSES)]: deleteCourses,
  [SUCCESS(DELETE_COURSES)]: deleteCoursesSuccess,
  [FAILURE(DELETE_COURSES)]: deleteCoursesError,

  [LOCATION_CHANGE]: resetState
})
