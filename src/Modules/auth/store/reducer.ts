import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from '@stores'
import { LOAD_PROFILE, LOGIN } from './constants'

export const initialState = {
  isLoading: false,
  error: null,
  authenticated: null,
  metaData: {},
  profile: {},
  isSubmitting: false
}

function login(state: any) {
  return updateObject(state, {
    isLoading: true
  })
}

function loginSuccess(state: any, { payload }: any) {
  const { profile } = payload
  return updateObject(state, {
    isLoading: false,
    profile
  })
}

function loginFailure(state: any, { error }: any) {
  return updateObject(state, {
    error,
    isLoading: false,
  })
}

function loadProfile(state: any) {
  return updateObject(state, {
    isLoading: true
  })
}

function profileLoaded(state: any, { payload }: any) {
  const { profile, metaData } = payload
  return updateObject(state, {
    isLoading: false,
    authenticated: true,
    metaData,
    profile
  })
}

function profileLoadingError(state: any, { error }: any) {
  return updateObject(state, {
    error,
    isLoading: false,
    authenticated: false
  })
}

// Slice reducer
export default createReducer(initialState, {
  [REQUEST(LOGIN)]: login,
  [SUCCESS(LOGIN)]: loginSuccess,
  [FAILURE(LOGIN)]: loginFailure,

  [REQUEST(LOAD_PROFILE)]: loadProfile,
  [SUCCESS(LOAD_PROFILE)]: profileLoaded,
  [FAILURE(LOAD_PROFILE)]: profileLoadingError
})
