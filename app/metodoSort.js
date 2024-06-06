let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

function ordernarLivrosPorPreco() {
    let livroOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livroOrdenados)
}