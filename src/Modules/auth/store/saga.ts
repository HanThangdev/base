import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST, SUCCESS, FAILURE } from '@stores'
import { getProfile } from '@apis'
import { getLocalStorage, STORAGE } from '@utils'
import { LOAD_PROFILE } from './constants'

export function* loadProfileSaga() {
  try {
    const getMetaData: any = getLocalStorage(STORAGE.META_DATA)
    const metaData = JSON.parse(getMetaData)
    const { data: result } = yield getProfile({ userId: metaData?.userId })

    yield put({
      type: SUCCESS(LOAD_PROFILE),
      payload: {
        metaData,
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
  yield takeLatest(REQUEST(LOAD_PROFILE), loadProfileSaga)
}
