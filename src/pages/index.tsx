import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AdminRoute, PrivateRoute, PublicRoute } from 'routes'
import { Routes as ROUTES } from 'constants/routes'

import UserLogin from './Public/UserLogin'
import UserSignUp from './Public/UserSignUp'
import UserForgetPassword from './Public/UserForgotPassword'
import UserHome from './User/Home'
import AdminHome from './Admin/Home'
import EmailVerifcation from './User/EmailVerification'
import EmailVerification from './User/EmailVerification'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path={ROUTES.signup} element={<PublicRoute component={UserSignUp} />} />

        <Route path={ROUTES.login} element={<PublicRoute component={UserLogin} />} />

        <Route path={ROUTES.forget} element={<PublicRoute component={UserForgetPassword} />} />

        {/* Private routes */}
        <Route path={ROUTES.index} element={<PrivateRoute component={UserHome} />} />
        <Route path={ROUTES.verify} element={<PrivateRoute component={EmailVerification} />} />

        {/* Admin routes */}
        <Route path={ROUTES.adminHome} element={<AdminRoute component={AdminHome} />} />

        <Route path="*" element={<Navigate to={ROUTES.login} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
