import HomeLayout from '@layouts/home'

import HomeScreen from '@modules/home'

import { USER_ROLE } from '@constants/auth'

const RoutesName = {
  HOME: '/',
  COURSE: '/course-management'
}

export const ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomeScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
]

export default RoutesName
