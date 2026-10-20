// PARTE 1: DECLARAÇÃO E MODIFICAÇÃO BÁSICA

// Questão 1.1
const categorias = ["Eletrônicos", "Vestuário", "Alimentos"];

console.log("1.1 - Categorias:", categorias);


// Questão 1.2
const codigosProdutos = [101, 102, 103, 104];

const fornecedores = new Array(
    "TechSupply",
    "ModaExpress",
    "SuperFoods"
);

console.log("1.2 - Códigos:", codigosProdutos);
console.log("1.2 - Fornecedores:", fornecedores);


// Questão 1.3
console.log("1.3 - Primeira categoria:", categorias[0]);

categorias[1] = "Calçados";

console.log("1.3 - Categorias atualizadas:", categorias);


// PARTE 2: INSERÇÃO, REMOÇÃO E PESQUISA

// Questão 2.1
categorias.push("Livros");
console.log("Adicionando Livros:", categorias);

categorias.pop();
console.log("Removendo o último:", categorias);

categorias.unshift("Brinquedos");
console.log("Adicionando Brinquedos:", categorias);

categorias.shift();
console.log("Removendo o primeiro:", categorias);


// Questão 2.2
console.log("2.2 - Tamanho do array:", categorias.length);


// Questão 2.3
console.log("2.3 - Índice de Calçados:", categorias.indexOf("Calçados"));

console.log(
    "Eletrônicos está presente?",
    categorias.includes("Eletrônicos")
);


// PARTE 3: ITERAÇÃO

// Questão 3.1
console.log("3.1 - Laço for:");

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}


// Questão 3.2
console.log("3.2 - Laço for...of:");

for (const categoria of categorias) {
    console.log(categoria);
}


// PARTE 4: ARRAYS DE OBJETOS E MÉTODOS AVANÇADOS

const produtos = [
    { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
    { nome: "Mouse Gamer", preco: 120.00, estoque: 8 },
    { nome: "Monitor Ultrawide", preco: 1200.00, estoque: 4 }
];


// Questão 4.1
console.log("4.1 - Primeiro produto:", produtos[0].nome);


// Questão 4.2 - FILTER
const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 300;
});

console.log("4.2 - Produtos abaixo de R$ 300:", produtosBaratos);

const precos = [50, 150, 200, 350, 400];

const multiplosDe100 = precos.filter(function(preco) {
    return preco % 100 === 0;
});

console.log("4.2 - Múltiplos de 100:", multiplosDe100);


// Questão 4.3 - REDUCE
const quantidades = [2, 3, 5, 10];

const totalItens = quantidades.reduce(function(total, quantidade) {
    return total + quantidade;
}, 0);

console.log("4.3 - Total de itens:", totalItens);

const valorEstoque = produtos.reduce(function(total, produto) {
    return total + produto.preco * produto.estoque;
}, 0);

console.log("4.3 - Valor total do estoque: R$", valorEstoque.toFixed(2));


// Questão 4.4 - MAP
const precosOriginais = [100, 200, 300];

const precosComDesconto = precosOriginais.map(function(preco) {
    return preco * 0.9;
});

console.log("4.4 - Preços com desconto:", precosComDesconto);

const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log("4.4 - Nomes dos produtos:", nomesProdutos);


// Questão 4.5 - SLICE E SORT
const produtosOrdenados = produtos.slice();

produtosOrdenados.sort(function(a, b) {
    return a.preco - b.preco;
});

console.log("4.5 - Produtos em ordem crescente de preço:", produtosOrdenados);


// Questão 4.6 - SOME E FIND
const estoqueMenorQueCinco = produtos.some(function(produto) {
    return produto.estoque < 5;
});

console.log("4.6 - Existe estoque abaixo de 5?", estoqueMenorQueCinco);


// Novo cenário de inventário
const inventario = [
    { nome: "Teclado", estoque: 15 },
    { nome: "Mouse", estoque: 2 },
    { nome: "Headset", estoque: 10 }
];

const existeEstoqueCritico = inventario.some(function(produto) {
    return produto.estoque < 5;
});

console.log("Existe estoque crítico?", existeEstoqueCritico);

const produtoCritico = inventario.find(function(produto) {
    return produto.estoque < 5;
});

console.log("Primeiro produto com estoque crítico:", produtoCritico);
