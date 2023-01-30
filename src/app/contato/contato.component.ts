import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  constructor(
    private fb: FormBuilder
  ){}

  formContato = this.fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],

    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],

    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],

    email: ["", [
      Validators.email,
      Validators.required
    ]],

    mensagem: ["", [
      Validators.minLength(10),
      Validators.maxLength(20),
      Validators.required
    ]]
  })

  enviarForm(){
    alert("A mensagem foi enviada!");
    this.formContato.reset();
  }
}