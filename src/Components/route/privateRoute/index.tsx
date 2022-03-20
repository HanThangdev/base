/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import HomeLayout from '@layouts/home'
import { USER_ROLE } from '@constants/auth'
import { useAuth } from '@hooks'

function PrivateRoute({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}: any) {
  const { authenticated } = useAuth()
  const { rules } = rest
  const role = USER_ROLE.NISSHOKEN_SUPER_ADMIN
  const accessible = useMemo(() => authenticated && rules?.includes(role), [authenticated, role, rules])
  return (
    <Route
      {...rest}
      render={(props: any) => (accessible ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: '/403', state: {} }}
        />
      ))}
    />
  )
}

export default PrivateRoute
