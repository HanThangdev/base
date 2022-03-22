import { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import CustomRoute from '@components/route/customRoute'
import PrivateRoute from '@components/route/privateRoute'
import Loading from '@components/loading'

import AuthRoutes from '@modules/auth/routes'
import CourseRoutes from '@modules/course/routes'
import { ROUTES } from './constant'

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {ROUTES.map((routeConfig, index) => (
          <PrivateRoute
            key={index}
            {...routeConfig}
          />
        ))}
      </Switch>
      <CourseRoutes />
      <AuthRoutes />
    </Suspense>
  )
}
