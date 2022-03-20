import React from 'react'
import { Switch } from 'react-router-dom'

import PublicRoute from '@components/route/publicRoute'

export const RoutesName = {
  REGISTRATION_COURSE: '/course-management/lesson-course',
  CREATE_COURSE: '/course-management/lesson/create',
  EDIT_COURSE: '/course-management/lesson/edit'
}

export const ROUTES = [
  
]

export default function CourseRoutes() {
  return (
    <Switch>
      {ROUTES.map((routeConfig, index) => (
        <PublicRoute key={index} exact {...routeConfig} />
      ))}
    </Switch>
  )
}
