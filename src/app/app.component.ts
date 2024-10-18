import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './shared/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListarComponent } from "./shared/listar/listar.component";
import { AgregarComponent } from "./shared/agregar/agregar.component";
import { HomeComponent } from "./shared/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoginComponent, FooterComponent, ListarComponent, AgregarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StreamMasterPro';
}
