import { REQUEST } from '@stores'
import {
  LOAD_COURSES,
  LOAD_COURSE,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'

export function loadCourses(payload: any) {
  return {
    type: REQUEST(LOAD_COURSES),
    payload
  }
}

export function createCourse(payload: any) {
  return {
    type: REQUEST(CREATE_COURSE),
    payload
  }
}

export function editCourse(payload: any) {
  return {
    type: REQUEST(EDIT_COURSE),
    payload
  }
}

export function loadCourse(payload: any) {
  return {
    type: REQUEST(LOAD_COURSE),
    payload
  }
}

export function deleteCourses(payload: any) {
  return {
    type: REQUEST(DELETE_COURSES),
    payload
  }
}
