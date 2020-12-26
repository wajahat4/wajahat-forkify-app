
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './View';
class ResultsView extends View
{
    _parentElement=document.querySelector('.results');
    _errorMessage=" Sorry! No Recipe Found For Your Query :) Try Again."
    _message='';
    _generateMarkup()
    {
        
        return this._data.map(result=>previewView.render(result,false)).join('');
    }
}
export default new ResultsView();