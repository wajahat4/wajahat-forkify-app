import 'core-js/stable'; // For Other Polyfilling
import 'regenerator-runtime/runtime'; //For Promises Polyfiling
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';
import {MODAL_CLOSE_SEC} from './config';
import View from './views/View';
import previewView from './views/previewView';





// if(module.hot)
// {
//     module.hot.accept();
// }



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function() {
        try {
            const id = window.location.hash.slice(1);
            if (!id) return; 
            recipeView.renderSpinner();
            resultsView.update(model.getSearchResultsPage())
            bookmarksView.update(model.state.bookmarks);  

            await model.loadRecipe(id);
            recipeView.render(model.state.recipe);  
           
       
    } catch (error) {
        
        recipeView.renderError();
    }
}
controlRecipe();


const controlSearchResults=async function()
{
    resultsView.renderSpinner();
    const query=searchView.getQuery();
    if(!query) return;
    try
    {
        await model.loadSearchResults(query);
      
    //    resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search)
    }
    catch(error){
        console.log(error);
    }

}
const paginationControl=function(gotopage)
{
    
    resultsView.render(model.getSearchResultsPage(gotopage ));
    paginationView.render(model.state.search)
}
const controlServings=function(newServings)
{
    model.updateServings(newServings);
    recipeView.update(model.state.recipe);
}
const controlAddBookmarking=function()
{
// model.addBookmark(model.state.recipe);
if(!model.state.recipe.bookmarked) 
    model.addBookmark(model.state.recipe);
else if(model.state.recipe.bookmarked) model.deleteBookmark(model.state.recipe.id);
recipeView.update(model.state.recipe);
bookmarksView.render(model.state.bookmarks);
}
const controlBookmarks=function()
{
    bookmarksView.render(model.state.bookmarks);
}
const controlAddRecipe= async function(newRecipe)
{
    try{
        addRecipeView.renderSpinner();
        await model.uploadRecipe(newRecipe);
        console.log(model.state.recipe);
        recipeView.render(model.state.recipe);
        addRecipeView.renderMessage();
        bookmarksView.render(model.state.bookmarks);
        window.history.pushState(null,'',`#${model.state.recipe.id}`);
        setTimeout(function()
        {
            // addRecipeView.toggleWindow();
        },MODAL_CLOSE_SEC*1000);
    }
    catch(err)
    {
        console.error('😉',err);
        addRecipeView.renderError(err.message);
    }
};
const init=function()
{
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipe);
    recipeView.addHandlerForUpdatingServings(controlServings);
    recipeView.addHandlerForBookmarking(controlAddBookmarking);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerPagination(paginationControl);
    addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();


/*

bigtiger,photoshopmanipulation,speedart,photoshopediting,photoshopspeeart,speedart,editing,photoeffects,photoedting,editing,effects,photoeffects,colorgrading,photoshopcomposition,composition

*/