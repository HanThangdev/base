import {
  TOGGLE_SIDEBAR,
  HOVER_SIDEBAR
} from './constants'

export function toggleSidebar(payload: any) {
  return {
    type: TOGGLE_SIDEBAR,
    payload
  }
}

export function hoverSidebar(payload: any) {
  return {
    type: HOVER_SIDEBAR,
    payload
  }
}
