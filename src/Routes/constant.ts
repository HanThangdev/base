import HomeLayout from '@layouts/home'

import HomeScreen from '@modules/home'

const RoutesName = {
  HOME: '/',
}

export const ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomeScreen,
    layout: HomeLayout,
  },
]

export default RoutesName
