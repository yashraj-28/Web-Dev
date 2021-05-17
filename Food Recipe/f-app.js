const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '98dc7748';
const APP_KEY = '2d254e3d231773496f4d39c3ecf52d0a';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
    const responce = await fetch(baseURL);
    const data = await responce.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results){
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += `
        <div class="item">
        <img src="${result.recipe.image}" alt="" srcset="">
        <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a href="${result.recipe.url}" target="_blank" class="rbtn">Get Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet Label: ${result.recipe.dietLabels}</p>
        <p class="item-data">Ingredients: ${result.recipe.ingredientLines}</p>
        
    </div>
        `
    });
    searchResult.innerHTML = generatedHTML;
}