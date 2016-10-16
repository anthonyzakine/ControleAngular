// Création des routes : à propos des routes https://goo.gl/FbKYVx
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import des composants utilisés dans les routes
import { ArchiveComponent }  from './components/ToDoArchiveComponent';
import { DashboardComponent }  from './components/ToDoComponent';

const appRoutes: Routes = [
  // Définition d'une route
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  }
];

// Export de la class du module de routing
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);