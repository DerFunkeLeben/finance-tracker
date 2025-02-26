import { Suspense } from 'react'
import { Route, Routes } from 'react-router'

import { AnalyticsPage } from '@/pages/analytics'
import { CategoriesPage } from '@/pages/categories'
import { DashboardPage } from '@/pages/dashboard'
import { RouteName } from '@/shared/config/routes'

const routes = [
  {
    path: RouteName.DASHBOARD_PAGE,
    Component: DashboardPage,
  },
  {
    path: RouteName.CATEGORIES_PAGE,
    Component: CategoriesPage,
  },
  {
    path: RouteName.ANALYTICS_PAGE,
    Component: AnalyticsPage,
  },
]

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>
  )
}
