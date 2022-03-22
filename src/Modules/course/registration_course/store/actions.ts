import { REQUEST } from '@stores'
import { Payload } from '@type/Store'
import {
  LOAD_COURSES,
  LOAD_COURSE,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'

export function loadCourses(payload: Payload) {
  return {
    type: REQUEST(LOAD_COURSES),
    payload
  }
}

export function createCourse(payload: Payload) {
  return {
    type: REQUEST(CREATE_COURSE),
    payload
  }
}

export function editCourse(payload: Payload) {
  return {
    type: REQUEST(EDIT_COURSE),
    payload
  }
}

export function loadCourse(payload: Payload) {
  return {
    type: REQUEST(LOAD_COURSE),
    payload
  }
}

export function deleteCourses(payload: Payload) {
  return {
    type: REQUEST(DELETE_COURSES),
    payload
  }
}
