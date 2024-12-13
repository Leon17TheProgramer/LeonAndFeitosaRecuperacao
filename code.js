/*const plumbus = require('rickmortyapi')

const inputChar = document.querySelector('input')
const conteudo = document.querySelector('.conteudo')
const btn = document.querySelector('button')

const characters = await getCharacters()
const locations = await getLocations()
const episodes = await getEpisodes()*/

/*const buscachar = async (id) =>{
    const busca = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

    const res = await busca.json()

    const p = document.createElement('p')
    conteudo.appendChild(p)
    if(res.id === undefined){
        p.innerText = 'Personagem não encontrado'
        conteudo.appendChild(p)
    }else{
        p.innerHTML = `${res.name}, ${res.status}, ${res.species}`
        conteudo.appendChild(p)
    }
}

const charEncontrado = (e) => {
    e.preventDefault()
    conteudo.innerHTML = ''
    if(inputCep.value === ''){
        const p = document.createElement('p')
        p.innerHTML = 'Preencha o CEP corretamente.'
        conteudo.appendChild('p')
    } else {
        const id = inputCep.value.replace('.','').replace('-','')
        buscaCep(cep)
    }
    const id = inputChar.value
    buscaCep(id)
}

btn.addEventListener('click', cepEncontrado)

buscaCep()

const URL = "https://rickandmortyapi.com/api"

function ChamarAPI () {
    fetch(URL)
}*/

/*// Base URL of the API
const apiUrl = "https://rickandmortyapi.com/api/character"

// Fetching data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json() // Parse the JSON from the response
  })
  .then(data => {
    console.log(data.results) // Log the characters array to the console
    displayCharacters(data.results) // Pass the characters to a function
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error)
  });

// Function to display the characters in the HTML
function displayCharacters(characters) {
  const container = document.getElementById('characters-container')

  characters.forEach(character => {
    const characterCard = document.createElement('div')
    characterCard.classList.add('character-card')

    characterCard.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}" />
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
    `

    container.appendChild(characterCard)
  })
}

-----*/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form'); // Select the form element
  const input = document.querySelector('input'); // Select the input field
  const contentDiv = document.querySelector('.conteudo'); // Select the div for displaying content

  // Add event listener for form submission
  form.addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form submission behavior

    const characterName = input.value.trim(); // Get the input value and trim any extra spaces

    if (characterName === '') {
      contentDiv.innerHTML = '<p>Por favor, insira o nome de um personagem.</p>';
      return;
    }

    // Fetch data from the API
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar o personagem: ${response.status}`);
        }
        return response.json(); // Parse the JSON
      })
      .then(data => {
        // Clear the contentDiv before displaying new results
        contentDiv.innerHTML = '';

        if (data.results.length === 0) {
          contentDiv.innerHTML = '<p>Nenhum personagem encontrado.</p>';
          return;
        }

        // Display characters
        data.results.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character-card');

          characterCard.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}" />
            <p>Status: ${character.status}</p>
            <p>Espécie: ${character.species}</p>
          `;

          contentDiv.appendChild(characterCard);
        });
      })
      .catch(error => {
        contentDiv.innerHTML = `<p>Erro ao buscar dados: ${error.message}</p>`;
      });
  });
});
