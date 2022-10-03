import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import { PrivateRoute } from '@components'
import { Loading } from '@components/common'

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
