/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectAuthentication = (state: any) => state.auth || initialState

const makeSelectAuthentication = () =>
  createSelector(
    selectAuthentication,
    (state: any) => state
  )

export {
  selectAuthentication,
  makeSelectAuthentication
}
