/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import saga from '@modules/course/registration_course/store/saga'
import reducer from '@modules/course/registration_course/store/reducer'
import {
  makeSelectRegistrationCourses
} from '@modules/course/registration_course/store/selectors'
import {
  loadCourses,
  loadCourse,
  createCourse,
  editCourse,
  deleteCourses
} from '@modules/course/registration_course/store/actions'
import { useInjectSaga, useInjectReducer } from '@stores'

export const useRegistrationCourses = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { courses, pagination, filter, isLoading, error }: any = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const loadCoursesAction = (payload?: any) => dispatch(loadCourses(payload))
  const deleteCoursesAction = (payload?: any) => dispatch(deleteCourses(payload))

  return {
    courses,
    pagination,
    filter,
    isLoading,
    error,
    loadCoursesAction,
    deleteCoursesAction
  }
}

export const useCreateCourse = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { isSubmitting, error }: any = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const createCourseAction = (payload?: any) => dispatch(createCourse(payload))

  return {
    isSubmitting,
    error,
    createCourseAction
  }
}

export const useUpdateCourse = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { course, isSubmitting, error }: any = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const loadCourseAction = (payload?: any) => dispatch(loadCourse(payload))
  const editCourseAction = (payload?: any) => dispatch(editCourse(payload))

  return {
    course,
    isSubmitting,
    error,
    loadCourseAction,
    editCourseAction
  }
}

export const useLoadCourse = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { course }: any = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const loadCourseAction = (payload?: any) => dispatch(loadCourse(payload))

  return {
    course,
    loadCourseAction
  }
}
