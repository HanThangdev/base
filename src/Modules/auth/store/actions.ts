import { REQUEST } from '@stores'
import {
  LOGIN,
  LOAD_PROFILE
} from './constants'

export function login(payload: any) {
  return {
    type: REQUEST(LOGIN),
    payload
  }
}

export function loadProfile(payload: any) {
  return {
    type: REQUEST(LOAD_PROFILE),
    payload
  }
}
