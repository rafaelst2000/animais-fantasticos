export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')
  
  
  if(botaoAbrir && botaoFechar && containerModal) {
    function abrir(event){
      event.preventDefault()
      containerModal.classList.add('ativo')
    }
    
    function fechar(){
      event.preventDefault()
      containerModal.classList.remove('ativo')
    }
    
    function cliqueFora(event){
      if(event.target === this) fechar()
    }
    
    botaoAbrir.addEventListener('click', abrir)
    botaoFechar.addEventListener('click', fechar)
    containerModal.addEventListener('click', cliqueFora)
  }
}
