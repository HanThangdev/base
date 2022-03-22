import {
  put, takeLatest, select
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { notification } from 'antd'
import i18next from '@i18n'

import { REQUEST, SUCCESS, FAILURE } from '@stores'
import {
  getCourses,
  createCourse,
  editCourse,
  getCourse,
  deleteCourse
} from '@apis'

import { RoutesName } from '@modules/course/routes'
import {
  LOAD_COURSES,
  LOAD_COURSE,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'
import { makeSelectRegistrationCourses } from './selectors'
import UserResponse from '@type/Response/UserResponse'
import { Action } from '@type/Store'

i18next.loadNamespaces(['common'])

export function* loadCoursesAction({ payload }: Action) {
  try {
    const { results, ...pagination } = yield getCourses(payload)
    yield put({
      type: SUCCESS(LOAD_COURSES),
      payload: {
        courses: results,
        pagination,
        filter: payload?.params?.filter
      }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_COURSES),
      error
    })
  }
}

export function* createCourseAction({ payload }: Action) {
  try {
    yield createCourse(payload)
    yield put({
      type: SUCCESS(CREATE_COURSE)
    })
    yield put({
      type: REQUEST(LOAD_COURSES),
      payload: {
        userId: '1' // get from auth store
      }
    })
    notification.success({
      message: i18next.t('success'),
      description: i18next.t('common:message.create_success'),
      duration: 2
    })
    yield put(push(RoutesName.REGISTRATION_COURSE))
  } catch (error) {
    yield put({
      type: FAILURE(CREATE_COURSE),
      error
    })
  }
}

export function* editCourseAction({ payload }: Action) {
  try {
    yield editCourse(payload)
    yield put({
      type: SUCCESS(EDIT_COURSE)
    })
    yield put({
      type: REQUEST(LOAD_COURSES),
      payload: {
        userId: '1' // get from auth store
      }
    })
    notification.success({
      message: i18next.t('success'),
      description: i18next.t('common:message.update_success'),
      duration: 2
    })
    yield put(push(RoutesName.REGISTRATION_COURSE))
  } catch (error) {
    yield put({
      type: FAILURE(EDIT_COURSE),
      error
    })
  }
}

export function* loadCourseAction({ payload }: Action) {
  try {
    const course: UserResponse = yield getCourse(payload)
    yield put({
      type: SUCCESS(LOAD_COURSE),
      payload: { course }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_COURSE),
      error
    })
  }
}

export function* deleteCoursesAction({ payload }: Action) {
  const { callback, params } = payload
  const { pageSize: page, currentPage: limit } = params
  try {
    yield deleteCourse(payload)
    yield put({
      type: SUCCESS(DELETE_COURSES)
    })

    const { filter } = yield select(makeSelectRegistrationCourses())
    yield put({
      type: REQUEST(LOAD_COURSES),
      payload: {
        params: {
          page,
          limit,
          filter
        }
      }
    })
    notification.success({
      message: i18next.t('success'),
      description: i18next.t('common:message.delete_success'),
      duration: 2
    })
    callback.done()
  } catch (error) {
    yield put({
      type: FAILURE(DELETE_COURSES),
      error
    })
  }
}

export default function* registrationCoursesAction() {
  yield takeLatest(REQUEST(LOAD_COURSES), loadCoursesAction)
  yield takeLatest(REQUEST(CREATE_COURSE), createCourseAction)
  yield takeLatest(REQUEST(LOAD_COURSE), loadCourseAction)
  yield takeLatest(REQUEST(EDIT_COURSE), editCourseAction)
  yield takeLatest(REQUEST(DELETE_COURSES), deleteCoursesAction)
}
