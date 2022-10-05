import { Switch } from 'react-router-dom'

import { PublicRoute } from '@components'

import LoginScreen from '@modules/auth/login'

import AuthLayout from '@layouts/auth'

export const navigator = {
  LOGIN: '/login'
}

export const ROUTES = [
  {
    path: navigator.LOGIN,
    component: LoginScreen,
    layout: AuthLayout,
  },
  
]

export default function AuthRoutes() {
  return (
    <Switch>
      {ROUTES.map((routeConfig, index) => (
        <PublicRoute key={index} {...routeConfig} />
      ))}
    </Switch>
  )
}
