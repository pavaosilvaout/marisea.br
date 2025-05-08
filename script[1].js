
let carrinho = [];
const carrinhoLink = document.getElementById('carrinho-link');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const carrinhoModal = document.getElementById('carrinho');
const fecharCarrinho = document.getElementById('fechar-carrinho');

document.querySelectorAll('.adicionar-carrinho').forEach(button => {
  button.addEventListener('click', (e) => {
    const produto = e.target.parentElement;
    const id = produto.getAttribute('data-id');
    const nome = produto.querySelector('p').textContent;
    carrinho.push({ id, nome });
    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  carrinhoLink.textContent = `Carrinho (${carrinho.length})`;
  itensCarrinho.innerHTML = carrinho.map(item => `<p>${item.nome}</p>`).join('');
  totalCarrinho.textContent = (carrinho.length * 50).toFixed(2); // Assume preço fixo de R$50
}

carrinhoLink.addEventListener('click', () => {
  carrinhoModal.style.display = 'flex';
});

fecharCarrinho.addEventListener('click', () => {
  carrinhoModal.style.display = 'none';
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
  const mensagem = encodeURIComponent('Olá! Quero comprar as camisas: ' + carrinho.map(item => item.nome).join(', '));
  window.open(`https://wa.me/5547991875082?text=${mensagem}`, '_blank');
});
