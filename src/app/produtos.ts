export interface IProdutos {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    quantidadeEstoque: number;
}

export interface IProdutoCarrinho extends IProdutos{
    quantidade: number;
}

export const produtos: IProdutos[] = [
    {id: 1, descricao: "Aliança", preco: 350.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/alianca.jpg", quantidadeEstoque: 10 },
    {id: 2, descricao: "Anel Casal", preco: 100.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/anel-casal.jpg" , quantidadeEstoque: 15 },
    {id: 3, descricao: "Anel Colorido", preco: 120.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/anel-colorido.jpg", quantidadeEstoque: 23 },
    {id: 4, descricao: "Anel Filhos", preco: 350.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/anel-filhos.jpg", quantidadeEstoque: 14 },
    {id: 5, descricao: "Anel Solitário", preco: 150.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/anel-solitario.jpg", quantidadeEstoque: 15 },
    {id: 6, descricao: "Brinco Coração", preco: 99.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/brinco-coracao.jpg", quantidadeEstoque: 12 },
    {id: 7, descricao: "Brinco CSS", preco: 130.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/brinco-css.jpg", quantidadeEstoque: 9 },
    {id: 8, descricao: "Brinco Pingente", preco: 99.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/brinco-pingente.jpg", quantidadeEstoque: 10 },
    {id: 9, descricao: "Colar Carnaval", preco: 115.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/colar-carnaval.jpg", quantidadeEstoque: 14 },
    {id: 10, descricao: "Colar Conjunto", preco: 120.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/colar-conjunto.jpg", quantidadeEstoque: 50 },
    {id: 11, descricao: "Colar Ponto de Luz", preco: 100.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/colar-ponto-luz.jpg", quantidadeEstoque: 15 },
    {id: 12, descricao: "Pérola", preco: 200.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/perola.jpg", quantidadeEstoque: 19 },
    {id: 13, descricao: "Colar Pérolas", preco: 120.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/colar-perola.jpg", quantidadeEstoque: 50 },
    {id: 14, descricao: "Colar Pedras", preco: 100.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/colar-pedras.jpg", quantidadeEstoque: 15 },
    {id: 15, descricao: "Colar Cammadas", preco: 200.00, descricaoPreco: "Até 3x no cartão", imagem: "./assets/colar-camadas.jpg", quantidadeEstoque: 19 }
]