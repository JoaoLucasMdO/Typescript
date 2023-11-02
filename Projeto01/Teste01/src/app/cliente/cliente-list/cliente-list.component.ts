import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})

export class ClienteListComponent implements OnInit {
  title = 'Relação de Clientes';
  'clientes' : Cliente[];

  constructor(){}

  ngOnInit() {
    this.clientes = [
      {id:1, nome: 'Jennifer', endereco: 'Rua da Jennifer', limiteCredito: 120},
      {id:2, nome: 'Jorge', endereco: 'Rua do Jorge', limiteCredito: 220},
      {id:3, nome: 'João', endereco: 'Rua do João', limiteCredito: 320},
      {id:4, nome: 'Jhonatan', endereco: 'Rua da Jhonatan', limiteCredito: 420},
      {id:5, nome: 'George', endereco: 'Rua do George', limiteCredito: 520}
    ]  
  }
}
