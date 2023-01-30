import { Injectable } from '@angular/core';
import { IProdutos, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProdutos[] = produtos; 

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id === produtoId)
  }
}
