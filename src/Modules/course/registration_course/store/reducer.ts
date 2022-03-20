import { LOCATION_CHANGE } from 'connected-react-router'

import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from '@stores'
import {
  LOAD_COURSES,
  CREATE_COURSE,
  LOAD_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'

export const initialState = {
  isLoading: false,
  error: null,
  courses: [],
  course: {},
  pagination: {},
  filter: {},
  isSubmitting: false
}

function loadCourses(state: any) {
  return updateObject(state, {
    isLoading: true
  })
}

function coursesLoaded(state: any, { payload }: any) {
  const { courses, pagination, filter } = payload
  return updateObject(state, {
    isLoading: false,
    courses,
    pagination,
    filter
  })
}

function coursesLoadingError(state: any, { error }: any) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function loadCourse(state: any) {
  return updateObject(state, {
    isLoading: true
  })
}

function courseLoaded(state: any, { payload }: any) {
  const { course } = payload
  return updateObject(state, {
    isLoading: false,
    course
  })
}

function courseLoadingError(state: any, { error }: any) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function createCourse(state: any) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function createCourseSuccess(state: any) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function createCourseError(state: any, { error }: any) {
  return updateObject(state, { error })
}

function editCourse(state: any) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function editCourseSuccess(state: any) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function editCourseError(state: any, { error }: any) {
  return updateObject(state, { error })
}

function deleteCourses(state: any) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function deleteCoursesSuccess(state: any) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function deleteCoursesError(state: any, { error }: any) {
  return updateObject(state, { error })
}

function resetState(state: any) {
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
