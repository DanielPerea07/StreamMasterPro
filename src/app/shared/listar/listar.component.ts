import { Component } from '@angular/core';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [ModalAddComponent, ButtonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

}
