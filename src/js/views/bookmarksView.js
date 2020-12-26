
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View';
class bookmarksView extends View
{
    _parentElement=document.querySelector('.bookmarks');
    _errorMessage="There is no recipe yet. Find a nice recipe and then bookmark it :) ";
    _message='';
    addHandlerRender(handler)
    {
        window.addEventListener('load',handler);
    }
    _generateMarkup()
    {
        
        return this._data.map(bookmark=>previewView.render(bookmark,false)).join('');
    }
    
}
export default new bookmarksView();