/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

import { Route as rootRouteImport } from './routes/__root'
import { Route as HomeRouteImport } from './routes/home'
import { Route as DashboardLayoutRouteImport } from './routes/dashboard/_layout'
import { Route as AuthLayoutRouteImport } from './routes/_auth/_layout'
import { Route as DashboardLayoutIndexRouteImport } from './routes/dashboard/_layout/index'
import { Route as DashboardLayoutTransactionsRouteImport } from './routes/dashboard/_layout/transactions'
import { Route as DashboardLayoutStaffRouteImport } from './routes/dashboard/_layout/staff'
import { Route as DashboardLayoutSettingsRouteImport } from './routes/dashboard/_layout/settings'
import { Route as DashboardLayoutMembersRouteImport } from './routes/dashboard/_layout/members'
import { Route as AuthLayoutRegisterRouteImport } from './routes/_auth/_layout/register'
import { Route as AuthLayoutLoginRouteImport } from './routes/_auth/_layout/login'

const DashboardRouteImport = createFileRoute('/dashboard')()

const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const HomeRoute = HomeRouteImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardLayoutRoute = DashboardLayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => DashboardRoute,
} as any)
const AuthLayoutRoute = AuthLayoutRouteImport.update({
  id: '/_auth/_layout',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardLayoutIndexRoute = DashboardLayoutIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)
const DashboardLayoutTransactionsRoute =
  DashboardLayoutTransactionsRouteImport.update({
    id: '/transactions',
    path: '/transactions',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)
const DashboardLayoutStaffRoute = DashboardLayoutStaffRouteImport.update({
  id: '/staff',
  path: '/staff',
  getParentRoute: () => DashboardLayoutRoute,
} as any)
const DashboardLayoutSettingsRoute = DashboardLayoutSettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => DashboardLayoutRoute,
} as any)
const DashboardLayoutMembersRoute = DashboardLayoutMembersRouteImport.update({
  id: '/members',
  path: '/members',
  getParentRoute: () => DashboardLayoutRoute,
} as any)
const AuthLayoutRegisterRoute = AuthLayoutRegisterRouteImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthLayoutRoute,
} as any)
const AuthLayoutLoginRoute = AuthLayoutLoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthLayoutRoute,
} as any)

export interface FileRoutesByFullPath {
  '/home': typeof HomeRoute
  '/dashboard': typeof DashboardLayoutRouteWithChildren
  '/login': typeof AuthLayoutLoginRoute
  '/register': typeof AuthLayoutRegisterRoute
  '/dashboard/members': typeof DashboardLayoutMembersRoute
  '/dashboard/settings': typeof DashboardLayoutSettingsRoute
  '/dashboard/staff': typeof DashboardLayoutStaffRoute
  '/dashboard/transactions': typeof DashboardLayoutTransactionsRoute
  '/dashboard/': typeof DashboardLayoutIndexRoute
}
export interface FileRoutesByTo {
  '/home': typeof HomeRoute
  '/dashboard': typeof DashboardLayoutIndexRoute
  '/login': typeof AuthLayoutLoginRoute
  '/register': typeof AuthLayoutRegisterRoute
  '/dashboard/members': typeof DashboardLayoutMembersRoute
  '/dashboard/settings': typeof DashboardLayoutSettingsRoute
  '/dashboard/staff': typeof DashboardLayoutStaffRoute
  '/dashboard/transactions': typeof DashboardLayoutTransactionsRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/home': typeof HomeRoute
  '/_auth/_layout': typeof AuthLayoutRouteWithChildren
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/_layout': typeof DashboardLayoutRouteWithChildren
  '/_auth/_layout/login': typeof AuthLayoutLoginRoute
  '/_auth/_layout/register': typeof AuthLayoutRegisterRoute
  '/dashboard/_layout/members': typeof DashboardLayoutMembersRoute
  '/dashboard/_layout/settings': typeof DashboardLayoutSettingsRoute
  '/dashboard/_layout/staff': typeof DashboardLayoutStaffRoute
  '/dashboard/_layout/transactions': typeof DashboardLayoutTransactionsRoute
  '/dashboard/_layout/': typeof DashboardLayoutIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/home'
    | '/dashboard'
    | '/login'
    | '/register'
    | '/dashboard/members'
    | '/dashboard/settings'
    | '/dashboard/staff'
    | '/dashboard/transactions'
    | '/dashboard/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/home'
    | '/dashboard'
    | '/login'
    | '/register'
    | '/dashboard/members'
    | '/dashboard/settings'
    | '/dashboard/staff'
    | '/dashboard/transactions'
  id:
    | '__root__'
    | '/home'
    | '/_auth/_layout'
    | '/dashboard'
    | '/dashboard/_layout'
    | '/_auth/_layout/login'
    | '/_auth/_layout/register'
    | '/dashboard/_layout/members'
    | '/dashboard/_layout/settings'
    | '/dashboard/_layout/staff'
    | '/dashboard/_layout/transactions'
    | '/dashboard/_layout/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  HomeRoute: typeof HomeRoute
  AuthLayoutRoute: typeof AuthLayoutRouteWithChildren
  DashboardRoute: typeof DashboardRouteWithChildren
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard/_layout': {
      id: '/dashboard/_layout'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLayoutRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/_auth/_layout': {
      id: '/_auth/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthLayoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard/_layout/': {
      id: '/dashboard/_layout/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardLayoutIndexRouteImport
      parentRoute: typeof DashboardLayoutRoute
    }
    '/dashboard/_layout/transactions': {
      id: '/dashboard/_layout/transactions'
      path: '/transactions'
      fullPath: '/dashboard/transactions'
      preLoaderRoute: typeof DashboardLayoutTransactionsRouteImport
      parentRoute: typeof DashboardLayoutRoute
    }
    '/dashboard/_layout/staff': {
      id: '/dashboard/_layout/staff'
      path: '/staff'
      fullPath: '/dashboard/staff'
      preLoaderRoute: typeof DashboardLayoutStaffRouteImport
      parentRoute: typeof DashboardLayoutRoute
    }
    '/dashboard/_layout/settings': {
      id: '/dashboard/_layout/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardLayoutSettingsRouteImport
      parentRoute: typeof DashboardLayoutRoute
    }
    '/dashboard/_layout/members': {
      id: '/dashboard/_layout/members'
      path: '/members'
      fullPath: '/dashboard/members'
      preLoaderRoute: typeof DashboardLayoutMembersRouteImport
      parentRoute: typeof DashboardLayoutRoute
    }
    '/_auth/_layout/register': {
      id: '/_auth/_layout/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthLayoutRegisterRouteImport
      parentRoute: typeof AuthLayoutRoute
    }
    '/_auth/_layout/login': {
      id: '/_auth/_layout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLayoutLoginRouteImport
      parentRoute: typeof AuthLayoutRoute
    }
  }
}

interface AuthLayoutRouteChildren {
  AuthLayoutLoginRoute: typeof AuthLayoutLoginRoute
  AuthLayoutRegisterRoute: typeof AuthLayoutRegisterRoute
}

const AuthLayoutRouteChildren: AuthLayoutRouteChildren = {
  AuthLayoutLoginRoute: AuthLayoutLoginRoute,
  AuthLayoutRegisterRoute: AuthLayoutRegisterRoute,
}

const AuthLayoutRouteWithChildren = AuthLayoutRoute._addFileChildren(
  AuthLayoutRouteChildren,
)

interface DashboardLayoutRouteChildren {
  DashboardLayoutMembersRoute: typeof DashboardLayoutMembersRoute
  DashboardLayoutSettingsRoute: typeof DashboardLayoutSettingsRoute
  DashboardLayoutStaffRoute: typeof DashboardLayoutStaffRoute
  DashboardLayoutTransactionsRoute: typeof DashboardLayoutTransactionsRoute
  DashboardLayoutIndexRoute: typeof DashboardLayoutIndexRoute
}

const DashboardLayoutRouteChildren: DashboardLayoutRouteChildren = {
  DashboardLayoutMembersRoute: DashboardLayoutMembersRoute,
  DashboardLayoutSettingsRoute: DashboardLayoutSettingsRoute,
  DashboardLayoutStaffRoute: DashboardLayoutStaffRoute,
  DashboardLayoutTransactionsRoute: DashboardLayoutTransactionsRoute,
  DashboardLayoutIndexRoute: DashboardLayoutIndexRoute,
}

const DashboardLayoutRouteWithChildren = DashboardLayoutRoute._addFileChildren(
  DashboardLayoutRouteChildren,
)

interface DashboardRouteChildren {
  DashboardLayoutRoute: typeof DashboardLayoutRouteWithChildren
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardLayoutRoute: DashboardLayoutRouteWithChildren,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  HomeRoute: HomeRoute,
  AuthLayoutRoute: AuthLayoutRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
