import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('auth/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'panel',
    loadChildren: () => import('panel/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'intake',
    loadChildren: () =>
      import('intake/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];
