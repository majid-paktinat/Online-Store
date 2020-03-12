// let offset = 0;
// let resultNumbers = 2;
// let totalResults;

// function prevBtn(event){
//     offset = offset - resultNumbers;
//     checkBtn();
//     settingsAPI.url = `https://api.spoonacular.com/recipes/complexSearch?minCalories=1&maxCalories=10000&minProtein=1&maxProtein=10000&minFat=1&maxFat=10000&minCarbs=1&maxCarbs=10000&number=${resultNumbers}&offset=${offset}&addRecipeInformation=true&sort=${sortByItem}&sortDirection=${sortOrder}&includeIngredients=${ingredientIn}&excludeIngredients=${ingredientEx}&diet=${diet}&cuisine=${cuisine}&type=${mealType}&cuisine=${intolerance}&apiKey=${apikey}`
//     searchCall();
// }


// function nextBtn(event){
//     offset = offset + resultNumbers;
//     checkBtn();
//     settingsAPI.url = `https://api.spoonacular.com/recipes/complexSearch?minCalories=1&maxCalories=10000&minProtein=1&maxProtein=10000&minFat=1&maxFat=10000&minCarbs=1&maxCarbs=10000&number=${resultNumbers}&offset=${offset}&addRecipeInformation=true&sort=${sortByItem}&sortDirection=${sortOrder}&includeIngredients=${ingredientIn}&excludeIngredients=${ingredientEx}&diet=${diet}&cuisine=${cuisine}&type=${mealType}&cuisine=${intolerance}&apiKey=${apikey}`
//     searchCall();
// }

// function checkBtn(){
//     if ((offset) <= 0) {
//         offset = 0; 
//         document.querySelector("#prevbutton").disabled = true;
//     } else if ((offset) >= (totalResults-2)) {
//         offset = totalResults - 2 ; // maximum totalResults records will be shown
//         document.querySelector("#nextbutton").disabled = true;
//     } else{
//         document.querySelector("#prevbutton").disabled = false;
//         document.querySelector("#nextbutton").disabled = false;
//     }
// }