import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal-add',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './modal-add.component.html',
  styleUrl: './modal-add.component.css'
})
export class ModalAddComponent {

  constructor(private FormBuilder: FormBuilder){}
  
  addForm = this.FormBuilder.group({
    id:[""],
    nombre:[""],
    servicio:[""],
    correo:[""],
    pass:[""],
    usuario:[""],
    inicio:[""],
    fin:[""]
  });
  onSubmit(){

  }

}
