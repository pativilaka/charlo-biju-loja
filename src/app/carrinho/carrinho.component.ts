import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { NoticacaoService } from '../noticacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoService: NoticacaoService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce((prev , curr) => prev + (curr.preco * curr.quantidade), 0); 
  }

  comprar(){
    this.notificacaoService.notificar("Parabéns!! Sua compra foi finalizada.")
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
  
  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }
}
