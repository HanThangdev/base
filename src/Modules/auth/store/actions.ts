import { REQUEST } from '@stores'
import {
  LOAD_PROFILE
} from './constants'

export function loadProfile(payload: any) {
  return {
    type: REQUEST(LOAD_PROFILE),
    payload
  }
}
