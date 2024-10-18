import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ButtonModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  constructor(private formBuilder_:FormBuilder){}
  
  loginForm = this.formBuilder_.group({
    email:[""],
    password:[""]
  })

  onSubmit(){
    
  }

}
