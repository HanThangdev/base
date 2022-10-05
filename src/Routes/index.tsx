import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import { CustomRoute } from '@components'
import { Loading } from '@components/common'

import AuthRoutes from '@modules/auth/routes'
import CourseRoutes from '@modules/course/routes'
import { ROUTES } from './navigation'

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {ROUTES.map((routeConfig, index) => (
          <CustomRoute
            key={index}
            {...routeConfig}
          />
        ))}
      </Switch>
      <AuthRoutes />
      <CourseRoutes />
    </Suspense>
  )
}
