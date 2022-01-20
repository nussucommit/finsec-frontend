import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import useAuth from 'hooks/useAuth'
import { Routes } from 'constants/routes'
import { ROLE } from 'constants/roles'

interface PublicRouteProps {
  component: React.ElementType
}

const PublicRoute = ({ component: RouteComponent }: PublicRouteProps) => {
  const location = useLocation()

  const { isAuth } = useAuth()
  const isAdmin = isAuth === ROLE.Admin

  if (!isAuth) {
    return <RouteComponent />
  }

  if (isAuth && isAdmin) {
    return <Navigate to={Routes.adminHome} state={{ from: location }} />
  }

  return <Navigate to={Routes.index} state={{ from: location }} />
}

export default PublicRoute
