import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: () => import('./todos/todos').then(m => m.Todos)
    },
    {
        path: 'users',
        pathMatch: 'full',
        loadComponent: () => import('./users/users').then(m => m.Users)
    }
];
