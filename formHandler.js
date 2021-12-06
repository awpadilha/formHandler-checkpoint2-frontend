const form = document.querySelector('form');

// inputs
const createdAtInput = document.querySelector('input[name=\'dataCriacao\']')
const dateLimitInput = document.querySelector('input[name=\'prazo\']')
const descriptionInput = document.querySelector('input[name=\'descricao\']')

// wrapper
let wrapperContent = document.querySelector('#item-content')

// Pega o valor de hoje
const todayDate = dateToString(new Date())
// Retorna o valor do ano que vem: '28-11-2022' por exemplo
const oneYearLaterDate = dateToString(new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
createdAtInput.value = todayDate

//Define minimo e máximo da data limite
dateLimitInput.min = todayDate
dateLimitInput.max = oneYearLaterDate

// Ouve o usuario finalizar o formulario
form.addEventListener('submit', submit)

// Transforma uma data no padrao (Ex: 2022-02-01)
function dateToString(date) {
    return date.toISOString().split('T')[0]
}

function submit(event) {
    event.preventDefault();
    
    // Cria os elementos
    let createdAtContent = document.createElement('span')
    let dateLimitContent = document.createElement('span')
    let descriptionContent = document.createElement('strong')

    // Insere os valores 
    createdAtContent.innerHTML = `Data de criação: ${createdAtInput.value}`
    dateLimitContent.innerHTML = `Data limite: ${dateLimitInput.value}`
    descriptionContent.innerHTML = `Descrição: ${descriptionInput.value}`

    // Cria o elemento pai para reunir os filhos
    let wrapper = document.createElement('div')

    // Junta os elementos filhos ao pai
    wrapper.appendChild(createdAtContent)
    wrapper.appendChild(dateLimitContent)
    wrapper.appendChild(descriptionContent)

    // Junta o elemento pai ao elemento centralizador dos itens
    wrapperContent.appendChild(wrapper)
}