import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule} from 'primeng/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, ButtonModule, CheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private formbuilder_: FormBuilder, private router:Router){}

  loginForm = this.formbuilder_.group({
    email:[""],
    password:[""]
  })

  listar(){
    this.router.navigate(["listar"]);
  }

}
