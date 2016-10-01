import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import manifest from 'manifest'
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
].concat(manifest);

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
