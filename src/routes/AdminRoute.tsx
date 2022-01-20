import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import useAuth from 'hooks/useAuth'
import { Routes } from 'constants/routes'
import { ROLE } from 'constants/roles'

interface AdminRouteProps {
  component: React.ElementType
}

const AdminRoute = ({ component: RouteComponent }: AdminRouteProps) => {
  const location = useLocation()

  const { isAuth } = useAuth()
  const hasRequiredRole = isAuth === ROLE.Admin

  if (isAuth && hasRequiredRole) {
    return <RouteComponent />
  }

  return <Navigate to={Routes.adminLogin} state={{ from: location }} />
}

export default AdminRoute
