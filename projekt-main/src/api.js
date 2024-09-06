const APP_ID = '8bcd9b73';
const APP_KEY = '5f0af532428848e659348af67cf80df8';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
