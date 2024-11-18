import { Component, Input } from '@angular/core';

@Component({
  selector: 'ahava-form-title',
  standalone: true,
  imports: [],
  templateUrl: './form-title.component.html',
  styleUrl: './form-title.component.css'
})
export class FormTitleComponent {

  @Input() title: string = '';  // Título do formulário

}


