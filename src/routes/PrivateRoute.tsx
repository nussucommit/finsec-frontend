import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import useAuth from 'hooks/useAuth'
import { Routes } from 'constants/routes'
import { ROLE } from 'constants/roles'

interface PrivateRouteProps {
  component: React.ElementType
}

const PrivateRoute = ({ component: RouteComponent }: PrivateRouteProps) => {
  const location = useLocation()

  const { isAuth } = useAuth()
  const hasRequiredRole = isAuth === ROLE.User

  if (isAuth && hasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuth && !hasRequiredRole) {
    return <Navigate to={Routes.adminHome} state={{ from: location }} />
  }

  return <Navigate to={Routes.login} state={{ from: location }} />
}

export default PrivateRoute
