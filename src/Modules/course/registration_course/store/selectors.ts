/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { Store } from '@type/Store'
import { CourseState } from '@type/Store/course'
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectRegistrationCourses = (store: Store) => store.registrationCourses || initialState

const makeSelectRegistrationCourses = () =>
  createSelector(
    selectRegistrationCourses,
    (state: CourseState) => state
  )

export {
  selectRegistrationCourses,
  makeSelectRegistrationCourses,
}
