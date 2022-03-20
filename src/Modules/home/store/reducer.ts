// /*
//  * AppReducer
//  *
//  * The reducer takes care of our data. Using actions, we can
//  * update our application state. To add a new action,
//  * add it to the switch statement in the reducer function
//  * @param  {state} login state
//  * @param  {action} login action
//  */
// import { createReducer, updateObject } from '@stores'
// import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants'

// export const initialState = {
//   isLoading: false,
//   authenticated: false,
//   error: null,
//   users: []
// }

// function loadRepos(state: any) {
//   return updateObject(state, {
//     isLoading: true
//   })
// }

// function reposLoaded(state: any, { users }: any) {
//   return updateObject(state, {
//     authenticated: true,
//     isLoading: false,
//     users
//   })
// }

// function repoLoadingError(state: any, { error }: any) {
//   return updateObject(state, {
//     error,
//     authenticated: false,
//     isLoading: false
//   })
// }

// // Slice reducer
// export default createReducer(initialState, {
//   [LOAD_REPOS]: loadRepos,
//   [LOAD_REPOS_SUCCESS]: reposLoaded,
//   [LOAD_REPOS_ERROR]: repoLoadingError
// })

export {}