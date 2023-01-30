import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NoticacaoService } from 'src/app/noticacao.service';
import { IProdutoCarrinho, IProdutos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';


@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {
  produto: IProdutos | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NoticacaoService,
    private carrinhoServico: CarrinhoService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi add ao carrinho com sucesso!");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoServico.addAoCarrinho(produto);
  }

}