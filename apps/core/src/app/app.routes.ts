import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    path: 'auth',
    loadChildren: () => import('auth/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
