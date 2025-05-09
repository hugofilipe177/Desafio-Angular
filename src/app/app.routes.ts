import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { defesaLoginGuard } from './componentes/servico-back/defesa-login.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [defesaLoginGuard]} ,
    { path:'home', component: HomeComponent},
    { path:'dashboard', component: DashboardComponent}
];
