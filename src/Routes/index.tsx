import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

// import PrivateRoute from 'Components/route/privateRoute'
import PublicRoute from '@components/route/publicRoute'
import Loading from '@components/loading'

import AuthRoutes from '@modules/auth/routes'
import CourseRoutes from '@modules/course/routes'

import BlankLayout from '@layouts/blank'

import ForbiddenScreen from '@modules/other/403'
import { ROUTES } from './constant'

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <PublicRoute exact path="/403" layout={BlankLayout} component={ForbiddenScreen} />
        {ROUTES.map((routeConfig, index) => (
          <PublicRoute
            key={index}
            exact
            {...routeConfig}
          />
        ))}
      </Switch>
      <CourseRoutes />
      <AuthRoutes />
    </Suspense>
  )
}
