import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST, SUCCESS, FAILURE } from '@stores'
import { login, getProfile } from '@apis'
import { LOAD_PROFILE, LOGIN } from './constants'

export function* loginSaga({ payload }: any) {
  try {
    const { data: result } = yield login(payload)

    yield put({
      type: SUCCESS(LOAD_PROFILE),
      payload: {
        profile: result.data
      }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_PROFILE),
      error
    })
  }
}

export function* loadProfileSaga() {
  try {
    const { data: result } = yield getProfile({ userId: 1 })

    yield put({
      type: SUCCESS(LOAD_PROFILE),
      payload: {
        profile: result.data
      }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_PROFILE),
      error
    })
  }
}

export default function* authSaga() {
  yield takeLatest(REQUEST(LOGIN), loginSaga)
  yield takeLatest(REQUEST(LOAD_PROFILE), loadProfileSaga)
}
