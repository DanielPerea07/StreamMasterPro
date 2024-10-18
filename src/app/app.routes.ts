import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ListarComponent } from './shared/listar/listar.component';
import { AgregarComponent } from './shared/agregar/agregar.component';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'listar',component:ListarComponent},
    {path:'agregar',component:AgregarComponent}

];
