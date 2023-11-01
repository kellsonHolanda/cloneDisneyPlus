document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    
    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(botao){
            const alvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${alvo}]`);
            esconderTodasAsAbas();
            aba.classList.add('shows__list--is-active');
            removerBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active');
            
        })
    }
}
)
function removerBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i=0; i< buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');

}}

function esconderTodasAsAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i=0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}