/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectRegistrationCourses = (state: any) => state.registrationCourses || initialState

const makeSelectRegistrationCourses = () =>
  createSelector(
    selectRegistrationCourses,
    state => state
  )

export {
  selectRegistrationCourses,
  makeSelectRegistrationCourses,
}
