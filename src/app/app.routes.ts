import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { ComparadorCarrosComponent } from './componentes/comparador-carros/comparador-carros.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent} ,
    { path:'home', component: HomeComponent},
    { path:'dashboard', component: DashboardComponent},
    {path:'carousel', component: CarouselComponent},
    { path:'comparadordecarros',  component: ComparadorCarrosComponent}
];
