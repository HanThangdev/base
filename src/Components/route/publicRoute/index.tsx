/* eslint-disable react/prop-types */
import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import HomeLayout from '@layouts/home'
import { useAuth } from '@hooks'

function PublicRoute({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}: any) {
  const { authenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={(props: any) => (!authenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: '/', state: {} }}
        />
      ))}
    />
  )
}

export default PublicRoute
